import React from 'react';
import users from './users';
import UserTable from './UserTable.jsx'

export default class Table extends React.Component {

    constructor(){
        super();
        this.handlePreviewClick = this.handlePreviewClick.bind(this)
    }

    handlePreviewClick(id,
                       firstName,
                       lastName,
                       email,
                       gender,
                       ipAddress)  {
        this.props.history.replace(`/tableView/users/${id}?firstName=${firstName}&lastName=${lastName}&email=${email}&gender=${gender}&ipAddress=${ipAddress}`)
    }
    render(){
        return (
            <table cellSpacing="0">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((el) => (<UserTable key={el.id}
                                                 first_name={el.first_name}
                                                 last_name={el.last_name}
                                                 gender={el.gender}
                                                 onClick={this.handlePreviewClick.bind(null, el.id, el.first_name, el.last_name, el.email, el.gender, el.ip_address)}
                        />))
                    }
                </tbody>
            </table>

        )
    }
}
