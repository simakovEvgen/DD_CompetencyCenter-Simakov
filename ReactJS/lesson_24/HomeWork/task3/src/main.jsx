/*
* Home Work
*
* ### Задача 3
*
* Модицифицируйте код предыдущей задачи. Реализуйте следующее:
* При клике по каждому элементу списка происходит перенаправление на страницу “/tableView/:id” или “/listView/:id”, в зависимости от текущего пути приложения, где id – соответствующее свойтво id элемента списка или таблицы, по которому кликнул пользователь
* На странице, на которую будет происходить перенаправление, должна отображаться инфомация об элементе массива users, id которого был передан в поисковой строке. Реализуйте передачу этой информации через query параметры.
*/

import createHistory from 'history/createBrowserHistory';
const history = createHistory();

import ReactDOM from 'react-dom';
import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';

import App from  './App.jsx';
import Table from  './TableView.jsx';
import List from  './ListView.jsx';
import UserInfo from './UserInfo.jsx';

ReactDOM.render(
    <HashRouter history={history}>
        <App>
                <Route path="/tableView" component={Table} />
                <Route path="/tableView/users/:id" component={UserInfo} />
                <Route path="/listView" component={List} />
                <Route path="/listView/users/:id" component={UserInfo} />
                <Redirect from="*" to="/"/>
        </App>
    </HashRouter>,
    document.getElementById('root')
);
