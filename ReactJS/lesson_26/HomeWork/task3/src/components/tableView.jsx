var React = require('react');

class TableView extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const deleteTask = this.props.onClickDelete;

        return (
            <table>
                <thead>
                    <tr>
                        <th>Tasks</th>
                        <th>Status</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.items.map(el=>
                            <tr key={el.id}>
                                <td>{el.task}</td>
                                <td><span className="status">{el.isChecked ? <span className="done">  Done  </span> : <span className="in-process">    In process   </span>}</span></td>
                                <td>{this.props.onClickEdit ? <span className="edit-btn" data-id={el.id} onClick={this.props.onClickEdit}>Edit</span> : ""}<span className="delete" data-task-id={el.id} onClick={deleteTask}>X</span></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        )
    }
}

module.exports = TableView;