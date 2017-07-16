import React from 'react'
import ButtonComp from './ButtonComp.jsx'

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            users: [
                {first_name:"Matthew",last_name:"Phillips",email:"mphillips0@myspace.com",gender:"Male",ip_address:"14.241.172.154", id:23468},
                {first_name:"Larry",last_name:"Weaver",email:"lweaver1@slideshare.net",gender:"Male",ip_address:"126.139.9.128", id:89078},
                {first_name:"Barbara",last_name:"Tucker",email:"btucker2@cbc.ca",gender:"Female",ip_address:"92.195.229.16", id: 56435},
                {first_name:"Jonathan",last_name:"Cook",email:"jcook3@fc2.com",gender:"Male",ip_address:"187.79.225.71", id:78908},
                {first_name:"Jean",last_name:"Flores",email:"jflores4@last.fm",gender:"Female",ip_address:"222.197.158.249", id:67653},
                {first_name:"Kimberly",last_name:"Nelson",email:"knelson5@nifty.com",gender:"Female",ip_address:"111.174.89.57", id:83425},
                {first_name:"Willie",last_name:"Banks",email:"wbanks6@abc.net.au",gender:"Male",ip_address:"97.0.19.154", id:99873},
                {first_name:"Michael",last_name:"King",email:"mking7@w3.org",gender:"Male",ip_address:"149.114.62.6", id: 34239}
            ]
        };
        this.addUser = this.addUser.bind(this);
    }

    addUser() {
        let newList = this.state.users;
        let user = this.state.users[0];
        let copy = Object.assign({}, user);
        newList.push(copy);
        this.setState({
            users: newList
        })
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Ip Adress</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(function(el, i) {
                                return (
                                    <tr key={i}>
                                        <td>{el.first_name}</td>
                                        <td>{el.last_name}</td>
                                        <td>{el.email}</td>
                                        <td>{el.gender}</td>
                                        <td>{el.ip_address}</td>
                                        <td>{el.id}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <ButtonComp onClick={this.addUser}/>
            </div>
        )
    }
}
