import React from 'react';
import { shallow } from 'enzyme';
import '../setupTests';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it('render MainPage without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
      }
    ],
    searchField: 'john',
    isPending: false
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper2.instance().filterRobots()).toEqual([
    {
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }
  ]);
});

it('filters robots correctly which should no results', () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
      }
    ],
    searchField: 'a',
    isPending: false
  };
  const filteredRobots = [];
  const wrapper3 = shallow(<MainPage {...mockProps3} />);
  expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
});
