const initialState = {
    listOrTable: true,
    users: []
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

        case 'FETCH_USERS_START': {
            return {...state, fetching: true, users: []};
            break;
        }
        case 'FETCH_USERS_ERROR': {
            return {...state, fetching: false, error: action.payloads, users: []};
            break;
        }
        case 'RECEIVE_USERS': {
            console.log(action.payload);
            return {
                ...state,
                listOrTable: state.listOrTable,
                fetching: false,
                fetched: true,
                users: action.payload
            }
            break;
        }

        default: {
            return state;
        }
    }
};

module.exports = taskReducer;