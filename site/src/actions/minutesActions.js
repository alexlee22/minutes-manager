export const addTask = (payload) => dispatch => {
    dispatch({
        type: 'ADD_TASK',
        payload: payload
    })
}
export const removeTask = (payload) => dispatch => {
    dispatch({
        type: 'REMOVE_TASK',
        payload: payload
    })
}

export const updateNote = (payload) => dispatch => {
    dispatch({
        type: 'UPDATE_NOTE',
        payload: payload
    })
}
export const addNote = (payload) => dispatch => {
    dispatch({
        type: 'ADD_NOTE',
        payload: payload
    })
}
export const removeNote = (payload) => dispatch => {
    dispatch({
        type: 'REMOVE_NOTE',
        payload: payload
    })
}