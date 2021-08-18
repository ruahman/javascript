import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Navbar from '../components/Navbar/index.js';

describe('Navbar', () => {
  it('works ok', () => {
    const component = shallow(<Navbar />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
