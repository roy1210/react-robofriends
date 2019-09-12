/**
|--------------------------------------------------
| Be fire from `mapDispatchToProps`
|--------------------------------------------------
*/

import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

// normal redux way. returns object
export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

// redux-thunk way. returns function (Higher order function)
// waiting promise returns
export const requestRobots = () => dispatch => {
  // no payload due to no arg
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }));
};
