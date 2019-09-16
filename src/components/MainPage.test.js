import React from 'react';
import { shallow } from 'enzyme';
import '../setupTests';
import App from './App';

it('expect to render App components', () => {
  const mockStore = {
    robots: [],
    searchField: ''
  };

  const components = shallow(<App store={mockStore} />);
  expect(components.debug()).toMatchSnapshot();
});
