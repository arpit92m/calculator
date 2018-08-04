import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getOperationData } from '../reducers/counter';

class Result extends Component {
  render() {

    return (
      <div className="result-app">
        <div className='result-data'> {this.props.operationData} </div>
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
})

export default connect(mapStateToProps, mapDispatchToProps)(Result);