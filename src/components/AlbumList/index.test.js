const index = require('./index');

import '../../setupEnzyme'
import { shallow } from 'enzyme';
import React from 'react';
import AlbumList from './index';

let wrapper

beforeEach(() => {
  const mockProps = {
    deleteArtistFromFavorites: jest.fn(),
    getFavorites: jest.fn(),
    runSearch: jest.fn(),
    history: {},
    location: {},
    match: {},
    albums: [],
    top_artists: [],
  }

  wrapper = shallow(<AlbumList {...mockProps} />)
})

describe('AlbumList', () => {
  it('snapshot AlbumList component', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
