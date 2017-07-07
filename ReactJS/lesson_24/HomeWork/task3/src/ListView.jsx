import React from 'react';
import users from './users';
import UserList from './UserList.jsx'

export default class List extends React.Component {
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
        this.props.history.replace(`/listView/users/${id}?firstName=${firstName}&lastName=${lastName}&email=${email}&gender=${gender}&ipAddress=${ipAddress}`)
    }
    render(){
        return (
            <ul>
                {
                    users.map((el,i) => (<UserList key={el.id}
                                                  first_name={el.first_name}
                                                  last_name={el.last_name}
                                                  onClick={this.handlePreviewClick.bind(null, el.id, el.first_name, el.last_name, el.email, el.gender, el.ip_address)} />))
                }
            </ul>
        )
    }
}