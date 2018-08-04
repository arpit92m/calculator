import React, { Component } from 'react';
import { connect } from 'react-redux';

import { resetValue, addOperator, calculate } from '../actions/counterActions';
import { getOperationData } from '../reducers/counter';


const operators = ['+','-','/','*'];
export class Operators extends Component {

  constructor(props){
    super(props);

    this.makeOperation = this.makeOperation.bind(this);
    this.performOperation = this.performOperation.bind(this);
    this.resetOperation = this.resetOperation.bind(this);

  }

  performOperation() {
    this.props.calculate();
  }

  makeOperation(e) {
    const {operationData} = this.props;
      if(this.isOperator(operationData[operationData.length-1])){
        alert('wrong input');
      }
      else {
        this.props.addOperator(e.target.innerText)
      }
  }

  isOperator(value){
    let flag=false;
    operators.forEach((op)=>{
      if(value===op){
        flag=true;
      }
    })

    return flag;
  }

  resetOperation() {
    this.props.resetValue();
  }

  render() {
    return (
      <div className="operator-app">
        {
          operators.map((data,index)=>{
            return (
              <button type="button" onClick = {this.makeOperation} className = "number-data">{data}</button>
              )
          })
        }
        <button type="button" onClick = {this.performOperation} className="result-data">{ '=' } </button>
        <button type="button" onClick = {this.resetOperation} className="result-data">{ 'C' } </button>

      </div>
    );
  }
}const mapStateToProps = (state, props) => {
    return {
      operationData: getOperationData(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
  resetValue: (id) => dispatch(resetValue(id)),
  addOperator: (id) => dispatch(addOperator(id)),
  calculate: () => dispatch(calculate())

})

export default connect(mapStateToProps, mapDispatchToProps)(Operators);

