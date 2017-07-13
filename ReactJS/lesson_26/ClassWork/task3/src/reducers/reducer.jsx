const initialState = {
    bool: true,
    users: null
};

const reducer = (state=initialState, action) => {

    // обработка actions
    switch(action.type) {
        case 'SHOW_LIST': {
            state.bool = action.payload;
            return state;
            break;
        }

        case 'FETCH_USERS_START': {
            return {...state, fetching: true, users: []}
            break;
        }
        case 'FETCH_USERS_ERROR': {
            return {...state, fetching: false, error: action.payloads, users: []}
            break;
        }
        case 'RECEIVE_USERS': {
            return {
                ...state,
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

module.exports = reducer;