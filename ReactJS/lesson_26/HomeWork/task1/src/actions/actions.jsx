
export const changeView = (bool) => {
    console.log(bool);
    return {
        type: 'CHANGE_VIEW_MODE',
        payload: bool
    }
};
export const addTaskACT = (task) => {
    console.log(task);
    return {
        type: 'ADD_TASK',
        payload: task
    }
};
export const deleteTaskACT = (id) => {
    console.log(id);
    return {
        type: 'DELETE_TASK',
        payload: id
    }
};
