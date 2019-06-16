export const addTask = (payload) => dispatch => {
    dispatch({
        type: 'ADD_TASK',
        payload: payload
    })
}
/*
export const removeTask = (payload) => ({
    type: 'REMOVE_TASK',
    payload: payload
  })
*/

export const removeTask = (payload) => dispatch => {
    dispatch({
        type: 'REMOVE_TASK',
        payload: payload
    })
}
