const reducer = (state=true, action) => {

    // обработка actions
    switch(action.type) {
        case 'SHOW_LIST': {
            return state = action.payload;
            break;
        }
        default: {
            return state;
        }
    }
};

module.exports = reducer;