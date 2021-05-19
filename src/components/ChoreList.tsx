import { useState } from "react"
import { DailyChoreItem } from "./DailyChoreItem"
import { ChoreDay, getChoreList} from "../util/DataStore"
import { DayDisplay } from "./DayDisplay"
import { add } from 'date-fns'

type ChoreListProps = {
  displayDay: Date
}

export const ChoreList = (props:ChoreListProps) => {

  const [choreDay, setChoreDay] = useState<ChoreDay>(getChoreList(props.displayDay))

  const decrement = () => {
    setChoreDay(getChoreList(add(choreDay.date, {days: -1})))
  }
  const increment = () => {
    setChoreDay(getChoreList(add(choreDay.date, {days: 1})))
  }

  const toToday = () => {
    setChoreDay(getChoreList(new Date()))
  }

  const sameDay = (d1:Date, d2:Date) => {
    return d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
  }
  
  let returnButton = (sameDay(choreDay.date, new Date())) ? <></> : <button onClick={toToday}>Back To Today</button>;
  return (
    <>
    {/* Todo: Add in left/right chevron - https://fontawesome.com/icons/chevron-left?style=solid */}
      <button onClick={decrement}>Previous Day</button>
      {returnButton}
      
      {choreDay.chores.map((cd) => 
        <DailyChoreItem key={cd.choreName} name={cd.choreName} assignee={cd.personName}/>
      )}
      <DayDisplay day={choreDay.date}/>
      <button onClick={increment}>Next Day</button>
    </>
  );
};