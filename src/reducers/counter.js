const initialState = {
  count: 0,
  numSet: 0,
  trackClick: 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        trackClick: state.trackClick + 1 
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        trackClick: state.trackClick + 1
      };
    case 'RESET':
      return {
        ...state,
        count: (state.count = 0)
      };
    case 'INPT_NUM':
      return {
        ...state,
        count: parseInt(state.numSet),
        numSet: null,
        trackClick: 0
      };
    case 'CHANGED_IN_NUM':
      return {
        ...state,
        numSet: action.num
      };
    default:
      return state;
  }
}

export default counterReducer;