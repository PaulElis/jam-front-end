const index = require('./index');

import '../../setupEnzyme'
import { shallow } from 'enzyme';
import React from 'react';
import Button from './index';


describe('Button', () => {
  test('snapshot Button component', () => {
    expect(shallow(<Button />)).toMatchSnapshot();
  })
})
