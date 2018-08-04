

export function incrementNum(payload) {
  return {
    type: 'INCREMENT_NUM',
    payload: payload
  };
}

export function addOperator(payload) {
  return {
    type: 'ADD_OPERATOR',
    payload: payload
  };
}

export function calculate(payload) {
  return {
    type: 'CALCULATE',
    payload: payload
  };
}


export function resetValue(payload) {
  return {
    type: 'RESET',
    payload: payload
  };
}