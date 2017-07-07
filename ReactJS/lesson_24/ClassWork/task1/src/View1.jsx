import React from 'react';
import { Link } from 'react-router-dom';

export default class View1 extends React.Component {
    render(){
        return (
            <div>
                View 1 <br/>
                <Link to='/view2'>go to View 2</Link>
            </div>
        )
    }
}