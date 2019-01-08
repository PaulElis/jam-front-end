const index = require('./index');

import '../../setupEnzyme'
import { shallow } from 'enzyme';
import React from 'react';
import Button from './index';


describe('Button', () => {
  it('snapshot Button component', () => {
    expect(shallow(<Button />)).toMatchSnapshot();
  })

  // it('Button href props', () => {
  //   const mockLink = 'www.google.com'
  //   const wrapper = shallow(<Button href={mockLink}/>)
  //
  //   wrapper.find('[id='favoriteartist-button']')
  //   // expect(wrapper.props().href).toEqual('www.google.com');
  // })

})
