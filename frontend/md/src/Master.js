import React from 'react';
import axios from 'axios';
import './Master.css';
import Detail from './Detail';
import {Button, Table} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Create from './Create';

export default class Master extends React.Component {
    constructor(props) {
        super(props);
        this.currentId='';
        this.state = {
            jentries: [],
            history: [],
        };
        this.handleClick = this.handleClick.bind(this);
    }

    
    componentDidMount() {
        axios.get('http://localhost:3001/journalEntry/userName')
            .then(res => {
                console.log("Done!");
                const jentries = res.data;
                this.setState({jentries: jentries});
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
        for (var i = 0; i < this.state.jentries.length; i++) {
            const title = this.state.jentries[i].title;
            const date = this.state.jentries[i].date;
            const userName = this.state.jentries[i].userName;
            const id = this.state.jentries[i].id;
            rows.push(
                <tr onClick={() => this.handleClick(id)}>
                    <td>{userName}</td>
                    <td>{title}</td>
                    <td>{date}</td>
                </tr>
            )
        }

        return (
            <div className='root'> 
            <Router>
                <Link to="/create">
                    <Button id="lightbutton" variant="light" >New Entry</Button>   
                </Link>
                

                {/*Switch looks through children Routes and renders the first one that matches current URL*/}
                <Switch>
                <Route path="/create">
                    <Create />
                </Route>
                </Switch>
            </Router>
                
            
            
                <div className='master'>
                    <Table striped bordered hover>
                        <thead>
                            <td>Username</td>
                            <td>Title</td>
                            <td>Date</td>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </Table>
                </div>
                <div className='detail'>
                    <Detail value={this.currentId}/>
                </div>
            </div>
        )
    }
    
}

