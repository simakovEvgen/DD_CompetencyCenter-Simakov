const downloadReducer = (state={}, action) => {

    // обработка actions
    switch(action.type) {
        case 'DOWNLOAD_LIST': {
            var dataList = new Promise((res, rej) => {
                var req = new XMLHttpRequest();
                req.open('GET', '../data/data.json');
                req.onload = () => {
                    if (req.status == 200){
                        res(req.response);
                    }
                    else {
                        rej(Error(req.statusText));
                    }
                }
                req.onerror = () => rej(Error('Network Error'));
                req.send();
            });
            dataList.then(list => console.log("!"))
            state = dataList;
            return state;
            break;
        }
        default: {
            return state;
        }
    }
};

module.exports = downloadReducer;