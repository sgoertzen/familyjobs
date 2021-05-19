import React, { useState } from "react";
import { DailyChoreItem } from "./DailyChoreItem";
import {ChoreDay, getChoreList} from "../util/DataStore";

type ChoreListProps = {
  displayDay: Date
}

export const ChoreList = (props:ChoreListProps) => {

  const [choreDay, setChoreDay] = useState<ChoreDay>(getChoreList(props.displayDay))

  const decrement = () => {
    choreDay.date.setDate(choreDay.date.getDate() - 1)
    setChoreDay(getChoreList(choreDay.date))
  }
  const increment = () => {
    choreDay.date.setDate(choreDay.date.getDate() + 1)
    setChoreDay(getChoreList(choreDay.date))
  }
  
  return (
    <>
    {/* Todo: Add in left/right chevron - https://fontawesome.com/icons/chevron-left?style=solid */}
      <button onClick={decrement}>Previous Day</button>
      {choreDay.chores.map((cd) => 
        <DailyChoreItem key={cd.choreName} name={cd.choreName} assignee={cd.personName}/>
      )}
      <div>Showing chores for {choreDay.date.toLocaleDateString()}</div>
      <button onClick={increment}>Next Day</button>
    </>
  );
};