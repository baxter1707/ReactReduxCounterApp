import * as actionTypes from './actions'
const initialState = {
  counter : 123,
  firstName : 'john',
  lastName : 'Doe',
  tasks : []
}

const reducer = (state = initialState,action) => {

  if(action.type == actionTypes.INC_COUNTER) {
    return {
      ...state,
      counter : state.counter + 1
    }
  }

  else if (action.type == actionTypes.DEC_COUNTER) {
    return {
      ...state,
      counter : state.counter - 1
    }
  }

  else if (action.type == actionTypes.ADD_COUNTER) {
    return {
      ...state,
      counter : state.counter + 5
    }
  }

  else if (action.type == actionTypes.SUB_COUNTER) {
    return {
      ...state,
      counter : state.counter - 5
    }
  }

  return state
}

export default reducer
