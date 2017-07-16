var React = require('react');
var Link = require('react-router-dom').Link;
var appActions = require('../actions/actions.jsx');
var bindActionCreators = require('redux').bindActionCreators;
var connect = require('react-redux').connect;

class About extends React.Component {
    constructor(){
        super();
        this.rateFunc = this.rateFunc.bind(this)
        this.state = {
            rate: false
        }
    }

    rateFunc(event){
        this.props.rateApp(event.target.dataset.rate)
        console.log(event.target.dataset.rate)
        this.setState({
            rate: true
        })
    }

    render() {
        return (
            <div className="about">
                <p>ABOUT INFO</p>
                <div>
                    {this.props.rated
                        ?
                        'Rating: ' + this.props.average
                        :
                        <p className="stars">Rate App:
                            <span data-rate={1} onClick={this.rateFunc}>  1  </span>
                            <span data-rate={2} onClick={this.rateFunc}>  2  </span>
                            <span data-rate={3} onClick={this.rateFunc}>  3  </span>
                            <span data-rate={4} onClick={this.rateFunc}>  4  </span>
                            <span data-rate={5} onClick={this.rateFunc}>  5  </span>
                        </p>
                    }
                </div>
                {this.props.rated
                    ?
                    ''
                    :
                    'Rating: ' + this.props.average
                }
                <br />
                <Link to="/"><button>Back to App</button></Link>
            </div>
        )
    }
}

function mapStateToProps(state) {

    return {
        average: state.average,
        rated: state.rated
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        rateApp: appActions.rated
    }, dispatch)
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(About);