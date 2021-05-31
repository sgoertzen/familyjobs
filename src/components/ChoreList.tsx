/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React, { useState } from "react"
import { DailyChoreItem } from "./DailyChoreItem"
import { ChoreDay, getChoreList} from "../util/DataStore"
import { DayDisplay } from "./DayDisplay"
import { add } from 'date-fns'
import { ChevronButton, ChevronDirection } from './ChevronButton'
import { border } from '../styles/style'
import { TimedButton } from './TimedButton'
import { BirthdayConfetti } from './BirthdayConfetti'

type ChoreListProps = {
  displayDay: Date
}

const rowFlex = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between'
})

const colFlex = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly'
})


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
  
  let returnButton = (sameDay(choreDay.date, new Date())) ? null : <TimedButton onClick={toToday} timeoutMilliseconds={30000} />;
  return (
    <div css={[border, rowFlex]}>
      <ChevronButton onClick={decrement} direction={ChevronDirection.Left}/>
      <div css={colFlex}>
        <DayDisplay day={choreDay.date}/>
        {choreDay.chores.map((cd) => 
          <DailyChoreItem key={cd.choreName} name={cd.choreName} assignee={cd.personName}/>
        )}
        {returnButton}
      </div>
      <ChevronButton onClick={increment} direction={ChevronDirection.Right}/>
      <BirthdayConfetti displayDay={choreDay.date}/>
    </div>
  );
};