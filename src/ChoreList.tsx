import React from "react";
import "./App.css";
import { ChoreItem } from "./ChoreItem";

type ChoreListProps = {
  days: ChoreDay[],
}

type ChoreDay = {
  dayOfWeek: number,
  name: string,
  dishesUnload: string,
  dishesLoad: string,
  walkMorning: string,
  walkEvening: string,
}

export const ChoreList = (props:ChoreListProps) => {
  
  let currentDayOfWeek:number = new Date().getDay();
  
  return (
    <>
      <div className="stock-container">Welcome to Family Jobs.  Today is {new Date().toLocaleString()}</div>
        {props.days.filter(cd => cd.dayOfWeek === currentDayOfWeek).map((choreday) => (
            <>
            <ChoreItem name="Load Dishes" assignee={choreday.dishesLoad} />
            <ChoreItem name="Unload Dishes" assignee={choreday.dishesUnload} />
            <ChoreItem name="Walk Darwin Morning" assignee={choreday.walkMorning} />
            <ChoreItem name="Walk Darwin Evening" assignee={choreday.walkEvening} />
            </>
        ))}
    </>
  );
};