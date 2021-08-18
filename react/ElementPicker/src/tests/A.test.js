import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import A from '../components/Components/A.js';

describe('A', () => {
  it('works ok', () => {
    const component = shallow((
      <A
        values={{
          href: 'http://www.google.com',
          label: 'Click me!',
        }}
      />
    ));

    expect(toJson(component)).toMatchSnapshot();
  });
});
