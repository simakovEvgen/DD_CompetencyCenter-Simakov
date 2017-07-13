var React = require('react');

export default class List extends React.Component {
    render() {

        if (this.props.items == null){
            return <p>Error: Not Found</p>
        }
        const items = this.props.items
        return (
            <ul>
                {
                    items.map(el => <li key={el.id}>First Name: {el.first_name}<br/>Last Name: {el.last_name}<br/>Gender: {el.gender}<br/>Email: {el.email}</li>)
                }
            </ul>
        )
    }
}

module.exports = List;