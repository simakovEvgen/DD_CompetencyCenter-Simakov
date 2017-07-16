import React from 'react';
import { Link } from 'react-router-dom';


export default class App extends React.Component {
    render(){
        return (
            <div>
                <ul>
                    <li><Link to='/tableView' replace>Table</Link></li>
                    <li><Link to='/listView' replace>List</Link></li>
                </ul>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}