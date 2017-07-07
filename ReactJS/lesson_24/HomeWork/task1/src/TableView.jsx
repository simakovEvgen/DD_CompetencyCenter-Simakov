import React from 'react';

import users from './users';

export default class Table extends React.Component {
    render(){
        return (
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((el, i) => (<tr key={i}>
                            <th>{el.first_name}</th>
                            <th>{el.last_name}</th>
                            <th>{el.gender}</th>
                        </tr>))
                    }
                </tbody>
            </table>

        )
    }
}