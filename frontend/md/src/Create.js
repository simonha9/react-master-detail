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
        }
    }
    

    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="userName" placeholder="Enter Username" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="title" placeholder="Enter a title" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Content</Form.Label>
                    <Form.Control type="title" placeholder="Enter journal entry content" />
                </Form.Group>
            </Form>
        )
    }
}