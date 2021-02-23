import React from 'react';
import './App.css';
import { ChoreList } from './ChoreList';

// Note, either one of these work.  Don't understand the difference yet.
//import * as data from "./data.json";
const data = require('./data.json')


function App() {
  return (
    <div className="App">
      <ChoreList days={data.days}/>
    </div>
  );
}

export default App;
