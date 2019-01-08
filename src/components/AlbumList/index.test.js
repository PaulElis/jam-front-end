const index = require('./index');

import '../../setupEnzyme'
import { shallow } from 'enzyme';
import React from 'react';
import AlbumList from './index';


describe('AlbumList', () => {
  it('snapshot AlbumList component', () => {
    expect(shallow(<AlbumList />)).toMatchSnapshot();
  })
})
