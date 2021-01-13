import React, { Fragment } from 'react';
import axios from 'axios';

export default class Detail extends React.Component {

    constructor(props) {
        super(props);
        this.id='';
        this.state = {
            title: '',
            content: '',
            date: '',
            userName: ''
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.value !== prevProps.value) {
            this.id = this.props.value;
            if (this.id !== undefined) {
                axios.get('http://localhost:3001/journalEntry/get/' + this.id)
                    .then(res => {
                        console.log("Done!");
                        const entry = res.data;
                        this.setState({
                            title: entry.title,
                            content: entry.content,
                            date: entry.date,
                            userName: entry.userName
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
                <h4>Current selected for user: {this.state.userName}</h4>
                <ul>
                    <li>Title: {this.state.title}</li>
                    <li>Content: {this.state.content}</li>
                    <li>Date: {this.state.date}</li>
                </ul>
            </Fragment>
        )
    }
}