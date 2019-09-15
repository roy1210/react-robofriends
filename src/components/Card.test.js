import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Card from './Card';
import '../setupTests';

it('renders without crashing', () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
