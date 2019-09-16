import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
// import '../setupTests';

it('renders Header without crashing', () => {
  const components = shallow(<Header />);
  expect(components.debug()).toMatchSnapshot();
});
