import React from 'react';
import './App.css';
import { ChoreList } from './components/ChoreList';
import { Clock } from './components/Clock';
import { Disclaimer } from './components/Disclaimer';

function App() {
  return (
    <div className="App">
      <ChoreList displayDay={new Date()}/>
      <Clock/>
      <Disclaimer/>
    </div>
  );
}

export default App;
