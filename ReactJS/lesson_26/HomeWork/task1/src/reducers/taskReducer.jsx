const initialState = {
    listOrTable: true,
    users: [
        {id: `${Date.now()}`+1,task:'Task 1',isChecked:true},
        {id: `${Date.now()}`+2,task:'Task 2',isChecked:true},
        {id: `${Date.now()}`+3,task:'Task 3',isChecked:true},
        {id: `${Date.now()}`+4,task:'Task 4',isChecked:true}
    ]
};

const taskReducer = (state = initialState, action) => {

    // обработка actions
    switch(action.type) {

        case 'CHANGE_VIEW_MODE': {
            let newState = {
                listOrTable: action.payload,
                users: state.users
            };
            return newState;
            break;
        }

        case 'ADD_TASK': {
            let newUser = action.payload;

            let newData = state.users.concat(newUser);

            let newState = {
                listOrTable: state.listOrTable,
                users: newData
            };

            return newState;
            break;
        }

        case 'DELETE_TASK': {
            let id = action.payload;

            function matchesId(el) {
                if (el.id != id) {
                    return el
                }
            }
            let newData = state.users.filter(matchesId);

            let newState = {
                listOrTable: state.listOrTable,
                users: newData
            };

            return newState;
            break;
        }

        default: {
            return state;
        }
    }
};

module.exports = taskReducer;