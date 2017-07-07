import React from 'react';
import { Link } from 'react-router-dom';

export default class UserInfo extends React.Component {
    render(){
        function getQueryString(string) {

            let args = {};
            let myQuery = string;
            let pairs = myQuery.split("&");

            for (let i = 0; i < pairs.length; i++) {

                let pos = pairs[i].indexOf('=');
                if (pos == -1) {
                    continue;
                }

                let argName = pairs[i].substring(0, pos);
                let value = pairs[i].substring(pos + 1);
                args[argName] = value;
            }
            return args;
        }
        let user = getQueryString(this.props.location.search.substring(1));
        return (
            <div className="user-info">
                <p><span>First Name:</span> {user.firstName}</p>
                <p><span>Last Name:</span> {user.lastName}</p>
                <p><span>Email:</span> {user.email}</p>
                <p><span>Gender:</span> {user.gender}</p>
                <p><span>IP:</span> {user.ipAddress}</p>
                <p><span>ID:</span> {this.props.match.params.id}</p>
                <Link to={"/"}>Back Home</Link>
            </div>
        )
    }
}
