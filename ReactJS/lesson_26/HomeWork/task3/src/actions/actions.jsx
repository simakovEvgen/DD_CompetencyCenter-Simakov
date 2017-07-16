
export const changeView = (bool) => {
    return {
        type: 'CHANGE_VIEW_MODE',
        payload: bool
    }
};
export const addTaskACT = (task) => {

    return {
        type: 'ADD_TASK',
        payload: task
    }
};
export const deleteTaskACT = (id) => {

    return {
        type: 'DELETE_TASK',
        payload: id
    }
};
export const changeTaskACT = (task) => {
    return {
        type: 'CHANGE_TASK',
        payload: task
    }
};
export const rated = (rate) => {
    return {
        type: 'RATED',
        payload: rate
    }
};