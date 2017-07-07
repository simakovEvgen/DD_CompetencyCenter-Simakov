import React from 'react';
import { Link } from 'react-router-dom';

export default class View2 extends React.Component {
    render(){
        return (
            <div>
                View 2 <br/>
                <Link to='/view1'>go to View 1</Link>
            </div>
        )
    }
}