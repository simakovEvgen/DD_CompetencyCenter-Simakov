var React = require('react');

class ListView extends React.Component {
    render() {
        const deleteTask = this.props.onClickDelete;
        return (
            <div>
                <ul>
                    {
                        this.props.items.map(el=><li key={el.id}>{el.task} <span className="status">{el.isChecked ? <span className="done">  Done  </span> : <span className="in-process">    In process   </span>}</span>  {this.props.onClickEdit ? <span data-id={(el.id)} className="edit-btn" onClick={this.props.onClickEdit}>Edit</span> : ""}  <span className="delete" data-task-id={el.id} onClick={deleteTask}>X</span></li>)
                    }
                </ul>
            </div>
        )}
}

module.exports = ListView;