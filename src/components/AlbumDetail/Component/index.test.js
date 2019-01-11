const func = require('./functions');
const index = require('./index');

import '../../../setupEnzyme'
import { shallow } from 'enzyme';
import React from 'react';
import AlbumDetail from './index';

let wrapper

beforeEach(() => {
  const mockStore = {}
  const mockProps = {
    renderCSSTag: jest.fn(),
  }

  wrapper = shallow(<AlbumDetail store={mockStore} {...mockProps} />)
})


describe('AlbumDetail component', () => {
  it('There is an AlbumDetail component', () => {
    expect(wrapper.length).toEqual(1);
  })
})

describe('numberFormat function', () => {
  it('rounds 1,039,469 to 1M', () => {
    expect(func.numberFormat(1039469)).toBe('1M');
  });

  it('rounds 3,978,824 to 3.9M', () => {
    expect(func.numberFormat(3978824)).toBe('3.9M');
  });

  it('rounds 5,354,373 to 5.3M', () => {
    expect(func.numberFormat(5354373)).toBe('5.3M');
  });

  it('rounds 508,437 to 508K', () => {
    expect(func.numberFormat(508437)).toBe('508K');
  });
})
