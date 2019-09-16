import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import '../setupTests';

it('renders Card without crashing', () => {
  expect(shallow(<Card />).debug()).toMatchSnapshot();
});
