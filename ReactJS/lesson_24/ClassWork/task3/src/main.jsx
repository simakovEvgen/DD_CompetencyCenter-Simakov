/*
* Class Work
*
* ### Задача 3
*
* Модифицируйте код предыдущей задачи. Реализуйте следующее:
* При переходе по пути, не указанному в конфигурации маршрутизации, перенаправляйте пользователя на домашнюю страницу.
*/

import ReactDOM from 'react-dom';
import React from 'react';
import { HashRouter, Route, Switch, Link, Redirect } from 'react-router-dom';

import Home from  './Home.jsx';
import View1 from  './View1.jsx';
import View2 from  './View2.jsx';


ReactDOM.render(
<HashRouter>
<div>
<ul>
<li><Link to='/'>Home</Link></li>
    <li><Link to='/view1'>View 1</Link></li>
<li><Link to='/view2'>View 2</Link></li>
</ul>
<Switch>
<Route exact path="/" component={Home} />
    <Route path="/view1" component={View1} />
    <Route path="/view2" component={View2} />
    <Redirect from="*" to="/"/>
    </Switch>
    </div>
    </HashRouter>,
    document.getElementById('root')
);