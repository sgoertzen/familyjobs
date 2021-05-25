import React, { useEffect, useState } from 'react';
import './App.css';
import { ChoreList } from './components/ChoreList';
import { Clock } from './components/Clock';
import { Disclaimer } from './components/Disclaimer';
import { differenceInMilliseconds, startOfTomorrow } from 'date-fns'

export const App = () => {

  const [displayDate, setDisplayDate] = useState(new Date())

  useEffect(() => {
        let diff = differenceInMilliseconds(startOfTomorrow(), displayDate)
        console.log("Time till tomorrow: " + diff)
        setTimeout(() => { setDisplayDate(new Date()) }, diff)
    }, [displayDate]
  )

  return (
    <div className="App">
      <ChoreList displayDay={displayDate}/>
      <Clock/>
      <Disclaimer/>
    </div>
  )
}