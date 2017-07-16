var React = require('react');
var Link = require('react-router-dom').Link;


class Editor extends React.Component {
    constructor(props){
        super(props);
    }



    render() {

        return (
            <div>
                {this.props.tumbler ? "Edit Task" : "Add Task"} <input type="text" id="inputEditor" />
                <input type="checkbox" id="isChecked" />
                <button onClick={this.props.onClick}>{this.props.tumbler ? "Edit" : "Add"}</button>
                <Link to="/"><button>Cancel</button></Link>
            </div>

        )
    }
}

module.exports = Editor;