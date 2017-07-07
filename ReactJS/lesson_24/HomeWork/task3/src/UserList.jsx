import React from 'react';

export default class UserList extends React.Component {

    render(){
        const { first_name, last_name, onClick} = this.props;
        return (
            <li onClick={onClick}>{first_name + ' ' + last_name}</li>
        )
    }
}
