import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Fragment } from 'react';
import Master from './Master';

function App() {
  return (
    <Fragment>
    <h1 class="journal-header" id="journal-header">Journal Entries</h1>
    <Master />
    </Fragment>
  );
}

export default App;
