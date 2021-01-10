import React, { Fragment } from 'react';
import axios from 'axios';

export default class Detail extends React.Component {

    constructor(props) {
        super(props);
        this.id='';
        this.state = {
            firstName: '',
            lastName: '',
            userName: ''
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.value !== prevProps.value) {
            this.id = this.props.value;
            if (this.id !== undefined) {
                axios.get('http://localhost:3001/users/get/' + this.id)
                    .then(res => {
                        console.log("Done!");
                        const user = res.data;
                        this.setState({
                            firstName: user.firstName,
                            lastName: user.lastName,
                            userName: user.userName
                        });
                    })
            }
        }
    }

    

    render() {
        this.id = this.props.value;
        const id = this.id;
        console.log('id from detail: ' + id);
        
        return (
            <Fragment>
                <h4>Current selected</h4>
                <ul>
                    <li>{this.state.firstName}</li>
                    <li>{this.state.lastName}</li>
                    <li>{this.state.userName}</li>
                </ul>
            </Fragment>
        )
    }
}