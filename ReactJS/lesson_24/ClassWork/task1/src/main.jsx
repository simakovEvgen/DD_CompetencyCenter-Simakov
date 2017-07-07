/*
* Class Work
*
* ### Задача 1
*
* Создайте 2 файла с React компонентами, содержащими текст ‘View 1’ и ‘View2’. Создайте файл index.js,
* в котором выполните настройку маршрутизации для переключения между путями “/view1” и “/view2”.
*/

import ReactDOM from 'react-dom';
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import View1 from  './View1.jsx';
import View2 from  './View2.jsx';


ReactDOM.render(
        <HashRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={View1} />
                    <Route path="/view1" component={View1} />
                    <Route path="/view2" component={View2} />
                </Switch>
            </div>
        </HashRouter>,
    document.getElementById('root')
);