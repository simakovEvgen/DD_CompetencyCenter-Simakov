var React = require('react');

class Editor extends React.Component {
    constructor(props){
        super(props);
    }



    render() {

        return (
            <div>
                Add Task: <input type="text" id="inputEditor" />
                <input type="checkbox" id="isChecked" />
                <button onClick={this.props.onClick}>'Add'</button>
            </div>

        )
    }
}

module.exports = Editor;