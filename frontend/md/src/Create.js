import React, { Fragment } from 'react';
import axios from 'axios';
import {Form} from 'react-bootstrap';

export default class Create extends React.Component {

    constructor(props) {
        super(props);
        this.id='';
        this.state = {
            title: '',
            content: '',
            date: '',
            userName: ''
        };
        this.getUsername = this.getUsername.bind(this);
        this.getTitle = this.getTitle.bind(this);
        this.getUsername = this.getUsername.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getContent = this.getContent.bind(this);
    }

    getUsername(event) {
        this.setState({userName: event.target.value});
    }

    getTitle(event) {
        this.setState({title: event.target.value});
    }

    getContent(event) {
        this.setState({content: event.target.value});
    }
    
    handleSubmit(event) {
        alert('A username was submitted: ' + this.state.userName + ', with title: ' + this.state.title + ', with content: ' + this.state.content);
        event.preventDefault();
    }


    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="userName" placeholder="Enter Username" type="text" value={this.state.userName} onChange={this.getUsername} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="title" placeholder="Enter a title" type="text" value={this.state.title} onChange={this.getTitle} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Content</Form.Label>
                    <Form.Control type="content" as="textArea" rows={4} placeholder="Enter journal entry content" type="text" value={this.state.content} onChange={this.getContent} />
                </Form.Group>
                <input type="submit" value="Submit" />
            </Form>
        )
    }
}