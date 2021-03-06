import React, { Fragment } from 'react';
import axios from 'axios';
import {Card} from 'react-bootstrap';

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
                <Card style={{ width: '25rem' }}>
                    <Card.Header>Current selected for user: {this.state.userName}</Card.Header>
                    <Card.Title>{this.state.title}</Card.Title>
                    <Card.Subtitle>{this.state.date}</Card.Subtitle>
                    <Card.Text>{this.state.content}</Card.Text>
                </Card>
            </Fragment>
        )
    }
}