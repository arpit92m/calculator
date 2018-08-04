import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getOperationData } from '../reducers/counter';
import { incrementNum } from '../actions/counterActions';

const numbers = [0,1,2,3,4,5,6,7,8,9];

export class Numbers extends Component {

  constructor(props){
    super(props);

    this.makeOperation = this.makeOperation.bind(this);
  }

  makeOperation(e) {

    this.props.incrementNum(e.target.innerText)

  }

  render() {
    const {incrementNum} = this.props;

    return (
      <div className="number-app">
        {
          numbers.map((data,index)=>{
            return (
              <button type="button" key = {index} onClick = {this.makeOperation} className = "number-data">{data}</button>
              )
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
    return {
      operationData: getOperationData(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    incrementNum: (id) => dispatch(incrementNum(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Numbers);