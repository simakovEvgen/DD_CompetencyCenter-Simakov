import React from 'react';

import users from './users';

export default class List extends React.Component {
    render(){
        return (
            <ul>
                {
                    users.map((el,i) => (<li key={i}>{el.first_name + ' ' + el.last_name} </li>))
                }
            </ul>
        )
    }
}