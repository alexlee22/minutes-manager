

const initialState = {
  data: []
}

export default (state = initialState, action) => {
 switch (action.type) {
  
  case 'ADD_TASK':
    var currentTasks = state.data;
    currentTasks.push(action.payload)
    return { ...state, data: currentTasks }

  case 'REMOVE_TASK':
    var currentTasks = state.data;
    currentTasks.splice(action.payload, 1)
    return { ...state, data: currentTasks };
    
  default:
    return state
  }
}