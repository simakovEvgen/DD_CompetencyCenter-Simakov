var React = require('react');

export default class List extends React.Component {
    render() {
        const items = this.props.items
        return (
            <ul>
                {
                    items.map((el,i)=><li key={i}>{el}</li>)
                }
            </ul>
        )
    }
}

module.exports = List;