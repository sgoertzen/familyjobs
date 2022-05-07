/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import React, { useCallback, useEffect, useState } from 'react'
import { ChoreList } from './components/ChoreList'
import { Clock } from './components/Clock'
import { Disclaimer } from './components/Disclaimer'
import { differenceInMilliseconds, getHours, isPast, startOfTomorrow, set } from 'date-fns'
import { EasterEgg } from './components/EasterEgg'
import { css } from '@emotion/react'
import {NightlyRefresh} from './components/NightlyRefresh'
import { RemainingDays } from './components/RemainingDays'

const lightTheme = css({
  textAlign: 'center'
})

const darkTheme = css({
  color: '#666666',
  backgroundColor: 'black',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh'
})

export const App = () => {

  const inNightTime = useCallback(() => {
    let currentHour = getHours(new Date())
    return (currentHour < 7 || currentHour > 23)
  }, [])
  const [displayDate, setDisplayDate] = useState(new Date())
  const [nightMode, setNightMode] = useState(inNightTime())

  useEffect(() => {
      let todayAt7am = set(new Date(), {hours: 7, minutes: 0, seconds: 0})
      let nextDate = isPast(todayAt7am) ? startOfTomorrow() : todayAt7am
      let diff = differenceInMilliseconds(nextDate, displayDate)
      setTimeout(() => { setDisplayDate(new Date()); setNightMode(inNightTime) }, diff)
    }, [displayDate, inNightTime]
  )

  return (
    <div className="App" css={nightMode ? darkTheme : lightTheme}>
      <ChoreList displayDay={displayDate}/>
      <Clock/>
      <RemainingDays target={new Date("5/27/2022")}/>
      <Disclaimer/>
      <EasterEgg/>
      <NightlyRefresh/>
    </div>
  )
}