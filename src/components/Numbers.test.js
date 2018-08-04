import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import { connect } from 'react-redux';
import Numbers from './Numbers';
import { expect, assert } from 'chai';
import sinon from 'sinon';
import configureStore from 'redux-mock-store'

import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

const mockStore = configureStore();
const initialState = {}; 
let store = mockStore(initialState);
const wrapper = mount(<Numbers store={store} />)
let instance = wrapper.instance();

const numbers = [0,1,2,3,4,5,6,7,8,9];

describe('renders Numbers', () => {

  it('render total 10 btns', () =>{
    assert.lengthOf(wrapper.find('button'), 10)
  });

  describe('button methods', () => {
  let button = wrapper.find('button').at(0)

  it('render prop type', () =>{
    assert.equal(button.prop('type'),'button')
  });
  
  it('render prop className', () =>{
    assert.equal(button.prop('className'),'number-data')
  });

  it('render innerText', () =>{
    assert.equal(button.text(), 0 )
  });
  
});

  
});
