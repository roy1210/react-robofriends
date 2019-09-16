import React from 'react';
import { shallow } from 'enzyme';
import '../setupTests';
import SearchBox from './SearchBox';

it('renders SearchBox without crashing', () => {
  const mockSearch = 'Leanne';
  const components = shallow(<SearchBox searchfield={mockSearch} />);
  expect(components.debug(mockSearch)).toMatchSnapshot();
});
