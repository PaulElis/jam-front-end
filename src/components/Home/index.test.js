const index = require('./index');

import '../../setupEnzyme'
import { shallow } from 'enzyme';
import React from 'react';
import Home from './index';


describe('Home', () => {
  it('snapshot Home component', () => {
    expect(shallow(<Home />)).toMatchSnapshot();
  })
})
