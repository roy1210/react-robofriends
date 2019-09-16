import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';
import '../setupTests';

it('renders CardList without crashing', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John snow',
      username: 'John',
      email: 'john@gmail.com'
    }
  ];
  expect(shallow(<CardList robots={mockRobots} />).debug()).toMatchSnapshot();
});
