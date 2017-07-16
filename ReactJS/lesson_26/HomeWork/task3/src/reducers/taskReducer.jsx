const initialState = {
    listOrTable: true,
    users: [],
    rating: [5, 4, 5, 5, 3, 5, 4],
    average: 4.43,
    rated: false
};

const taskReducer = (state = initialState, action) => {

    // обработка actions
    switch(action.type) {

        case 'CHANGE_VIEW_MODE': {
            let newState = {
                listOrTable: action.payload,
                users: state.users,
                rating: state.rating,
                average: state.average,
                rated: state.rated
            };
            return newState;
            break;
        }

        case 'ADD_TASK': {
            let newTask = action.payload;

            let newData = state.users.concat(newTask);

            let newState = {
                listOrTable: state.listOrTable,
                users: newData,
                rating: state.rating,
                average: state.average,
                rated: state.rated
            };

            return newState;
            break;
        }

        case 'CHANGE_TASK': {
            let newTask = action.payload;
            let id = newTask.id;

            let newList = state.users;
            for ( let i = 0; i < newList.length; i++ ) {
                if ( newList[i].id == id ) {
                    newList[i].id = newTask.id;
                    newList[i].task = newTask.task;
                    newList[i].isChecked = newTask.isChecked;
                    }
                }

            let newState = {
                listOrTable: state.listOrTable,
                users: newList,
                rating: state.rating,
                average: state.average,
                rated: state.rated
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
                users: newData,
                rating: state.rating,
                average: state.average,
                rated: state.rated
            };

            return newState;
            break;
        }

        case 'RATED': {
            let newRateData = state.rating;
            newRateData.push(action.payload);
            let summ = 0;
            for(let i = 0; i < newRateData.length; i++){
                summ = summ + Number(newRateData[i]);

            }
            let newAverage = (+summ / +(newRateData.length));

            let newState = {
                listOrTable: state.listOrTable,
                users: state.users,
                rating: newRateData,
                average: newAverage.toFixed(2),
                rated: !state.rated
            };

            return newState;
            break;
        }

        case 'FETCH_USERS_START': {
            return {
                ...state,
                fetching: true,
                users: [],
                listOrTable: state.listOrTable,
                rating: state.rating,
                average: state.average,
                rated: state.rated
            };
            break;
        }
        case 'FETCH_USERS_ERROR': {
            return {...state, fetching: false, error: action.payloads, users: []};
            break;
        }
        case 'RECEIVE_USERS': {
            return {
                ...state,
                listOrTable: state.listOrTable,
                fetching: false,
                fetched: true,
                users: action.payload,
                rating: state.rating,
                average: state.average,
                rated: state.rated
            }
            break;
        }

        default: {
            return state;
        }
    }
};

module.exports = taskReducer;