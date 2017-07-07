import React from 'react';

export default class UserTable extends React.Component {

    render(){
        const { first_name, last_name, gender, onClick} = this.props;
        return (
            <tr onClick={onClick}>
                <th>{first_name}</th>
                <th>{last_name}</th>
                <th>{gender}</th>
            </tr>
        )

    }
}
