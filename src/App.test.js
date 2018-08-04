import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Numbers from './components/Numbers';
import Result from './components/Result';
import Operators from './components/Operators';
import { expect, assert } from 'chai';
import App from './App';

import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

describe('renders App', () => {
  let wrapper = shallow(<App/>);

  it('render Number component', () =>{
  	assert.isTrue(wrapper.find(Numbers).exists());
  })

  it('render Operators component', () =>{
  	assert.isTrue(wrapper.find(Operators).exists());
  })

  it('render Result component', () =>{
  	assert.isTrue(wrapper.find(Result).exists());
  })

  
});
