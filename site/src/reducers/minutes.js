




const initialState = {
  data: []
}


export default (state = initialState, action) => {
 switch (action.type) {
  
  //Tasks
  case 'ADD_TASK':
    var currentTasks = state.data;

    currentTasks.push({
      "number": 123456,
      "name": "Task Name",
      "tag": "Alex",
      "notes":[
          "Note 1",
          "Note 2",
          "Note 3",
      ]
    })
    return { ...state, data: currentTasks }
  case 'REMOVE_TASK':
    
    var currentTasks = state.data.slice();
    currentTasks.splice(action.payload, 1)
    return { ...state, data: currentTasks };
    
  
  //Notes
  case 'UPDATE_NOTE':
    currentTasks = state.data;
    currentTasks[action.payload.card].notes[action.payload.note] = action.payload.value;
    return { ...state, data: currentTasks };
  case 'ADD_NOTE':
    currentTasks = state.data;
    console.log(action.payload)
    currentTasks[action.payload].notes.push('');
    return { ...state, data: currentTasks }
  case 'REMOVE_NOTE':
      var getData = state.data.slice();
      var currentNotes = getData[action.payload.card].notes.slice();
      currentNotes.splice(action.payload.note, 1);
      getData[action.payload.card].notes = currentNotes;
      return { ...state, data: getData }
    
  default:
    return state
  }
}