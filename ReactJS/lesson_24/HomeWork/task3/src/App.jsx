import React from 'react';
import { Link } from 'react-router-dom';

const App = React.createClass ({

    render(){
        return (
            <div>
                <ul className="links">
                    <li><Link to='/tableView' replace>Table</Link></li>
                    <li><Link to='/listView' replace>List</Link></li>
                </ul>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
});

export default App