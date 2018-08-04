export default function reducer(state = '', action) {
  switch (action.type) {
  case 'INCREMENT_NUM': 
    return state + action.payload;
  case 'ADD_OPERATOR':
    return state + action.payload;
  case 'RESET':
    return state = '';
  case 'CALCULATE':
    return eval(state);
  }

  return state;
}

export function getOperationData(state, props) {
    return state.count
}