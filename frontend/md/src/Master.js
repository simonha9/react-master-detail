import React from 'react';
import axios from 'axios';
import './Master.css';
import Detail from './Detail'

export default class Master extends React.Component {
    constructor(props) {
        super(props);
        this.currentId='';
        this.state = {
            users: [],
            history: [],
        };
        this.handleClick = this.handleClick.bind(this);
    }

    
    componentDidMount() {
        axios.get('http://localhost:3001/users/')
            .then(res => {
                console.log("Done!");
                const users = res.data;
                this.setState({users: users});
            })
    }

    handleClick(id) {
        const history = this.state.history;
        console.log('rendering detail!');
        console.log('id=' + id);
        this.currentId = id;
        this.setState({
            history: history.concat(id)
        })
    }

    render() {
        let rows = [];
        for (var i = 0; i < this.state.users.length; i++) {
            const firstName = this.state.users[i].firstName;
            const lastName = this.state.users[i].lastName;
            const userName = this.state.users[i].userName;
            const id = this.state.users[i].id;
            rows.push(
                <tr onClick={() => this.handleClick(id)}>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{userName}</td>
                </tr>
            )
        }

        return (
            <div className='root'> 
                <div className='master'>
                    <table className='tabletable' id='tabletable'>
                        <thead>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Username</td>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </div>
                <div className='detail'>
                    <Detail value={this.currentId}/>
                </div>
            </div>
        )
    }
    
}