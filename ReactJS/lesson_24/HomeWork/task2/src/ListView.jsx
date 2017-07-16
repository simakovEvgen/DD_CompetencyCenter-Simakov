import React from 'react';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
import users from './users';

export default class List extends React.Component {
    render(){
        return (
            <div>
                <ReactCSSTransitionGroup
                    transitionName='example'
                    transitionAppear = {true} transitionAppearTimeout = {500}
                    transitionEnter = {false} transitionLeave = {false}
                >
                    <ul>
                        {
                            users.map((el,i) => (<li key={i}>{el.first_name + ' ' + el.last_name} </li>))
                        }
                    </ul>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}