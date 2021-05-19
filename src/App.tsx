import React from 'react';
import './App.css';
import { ChoreList } from './components/ChoreList';
import { Disclaimer } from './components/Disclaimer';

function App() {
  return (
    <div className="App">
      <ChoreList displayDay={new Date()}/>
      <Disclaimer/>
    </div>
  );
}

export default App;
