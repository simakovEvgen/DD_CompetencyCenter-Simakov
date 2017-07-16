/*
* Home Work
*
* ### Задача 2
*
* Модицифицируйте код предыдущей задачи. Добавьте анимацию при переходе по путям, указанным в конфигурации маршрутизации приложения.
*/


import ReactDOM from 'react-dom';
import React from 'react';
import { HashRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import App from  './App.jsx';
import Table from  './TableView.jsx';
import List from  './ListView.jsx';

ReactDOM.render(
    <HashRouter>
        <App>
            <Switch>
                <Route path="/tableView" component={Table} />
                <Route path="/listView" component={List} />
                <Redirect from="*" to="/"/>
            </Switch>
        </App>
    </HashRouter>,
    document.getElementById('root')
);