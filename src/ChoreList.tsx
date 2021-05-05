import React from "react";
import "./App.css";
import { DailyChoreItem } from "./DailyChoreItem";

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

  // function getWeekNumber(){
  //   let now = new Date();
  //   var d = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
  //   var dayNum = d.getUTCDay() || 7;
  //   d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  //   var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  //   return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
  // };

  // THIS NEEDS TO MOVE SOMEWHERE ELSE AND GET TESTS!
  function getWeekOfYear(date:Date) {
    var target = new Date(date.valueOf()),
        dayNumber = (date.getUTCDay() + 6) % 7,
        firstThursday;

    target.setUTCDate(target.getUTCDate() - dayNumber + 3);
    firstThursday = target.valueOf();
    target.setUTCMonth(0, 1);

    if (target.getUTCDay() !== 4) {
        target.setUTCMonth(0, 1 + ((4 - target.getUTCDay()) + 7) % 7);
    }

    return Math.ceil((firstThursday - target.valueOf()) /  (7 * 24 * 3600 * 1000)) + 1;
}
  
  let currentDayOfWeek:number = new Date().getDay();
  
  return (
    <>
      <div className="stock-container">Welcome to Family Jobs.  Today is {new Date().toLocaleString()}</div>
        {props.days.filter(cd => cd.dayOfWeek === currentDayOfWeek).map((choreday) => (
            <>
            <DailyChoreItem name="Load Dishes" assignee={choreday.dishesLoad} />
            <DailyChoreItem name="Unload Dishes" assignee={choreday.dishesUnload} />
            <DailyChoreItem name="Walk Darwin Morning" assignee={choreday.walkMorning} />
            <DailyChoreItem name="Walk Darwin Evening" assignee={choreday.walkEvening} />
            </> 
        ))}
    </>
  );
};