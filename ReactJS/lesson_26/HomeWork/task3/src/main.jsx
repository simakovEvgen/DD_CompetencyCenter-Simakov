/*
* Home Work
*
* ### Задача 3
*
* Используйте маршрутизацию. Дополните код предыдущей задачи; реализуйте следующее:
* В приложении должно быть три страницы (routes):
* 1. страница по умолчанию, на которой отображаются данные списка заданий;
* 2. страница для редактирования: добавления/удаления элементов списка, редактирования уже существующих элементов
* 3. страница about, на которой пользователь может оценить приложение по 5-балльной шкале и увидеть рейтинг приложения (среднее арифметическое всех пользовательских оценок)
*/

var React = require('react');
var ReactDOM = require('react-dom');

var Provider = require('react-redux').Provider;
var createStore = require('redux').createStore;

var HashRouter = require('react-router-dom').HashRouter;
var Route = require('react-router-dom').Route;
var Link = require('react-router-dom').Link;

var Switch = require('react-router-dom').Switch;
var createHistory = require('history').createBrowserHistory;
const history = createHistory();

var applyMiddleware = require('redux').applyMiddleware;

var thunk = require('redux-thunk').default;
var fetchUsers = require('./actions/async.jsx').fetchUsers;

var taskReducer = require('./reducers/taskReducer.jsx');

var App = require('./components/index.jsx');
var EditView = require('./components/editView.jsx');
var About = require('./components/about.jsx');


const middleware = applyMiddleware(thunk);
const store = createStore(taskReducer, middleware);

store.dispatch(fetchUsers());

ReactDOM.render(
    <Provider store={store}>
        <HashRouter history={history}>
            <div>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/edit" component={EditView}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </div>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);