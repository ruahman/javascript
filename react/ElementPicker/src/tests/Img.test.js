import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Img from '../components/Components/Img.js';

describe('Img', () => {
  it('works ok', () => {
    const component = shallow((
      <Img
        values={{
          alt: 'Cool image',
          src: 'http://lorempixel.com/400/200',
        }}
      />
    ));

    expect(toJson(component)).toMatchSnapshot();
  });
});
