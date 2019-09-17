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
import { apiCall } from './api/api';

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
  apiCall('https://jsonplaceholder.typicode.com/users')
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }));
};
