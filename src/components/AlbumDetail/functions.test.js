const func = require('./functions');
const index = require('./index');

import '../../setupEnzyme'
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import AlbumDetail from './index';
import Card from './index';



// console.log(shallow(<CardSection />).length);


// describe('Card count', () => {
//   it('renders children when passed in', () => {
//     const wrapper = shallow((
//       <AlbumDetail>
//         <div id='albumdetail-container' />
//       </AlbumDetail>
//     ));
//     expect(wrapper.contains(<div id='albumdetail-container' />)).to.equal(true);
//   });

  // it('renders 1 Card component', () => {
  //   const wrapper = shallow(<AlbumDetail />);
  //   expect(wrapper.find(Card)).to.have.lengthOf(1);
  // })
// })

describe('AlbumDetail', () => {
  test('expect to render AlbumDetail components', () => {
    expect(shallow(<AlbumDetail />).length).toEqual(1);
  })
})

describe('numberFormat', () => {
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
