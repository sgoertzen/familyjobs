/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import React, { useCallback, useEffect, useState } from 'react'
import { HAChoreList } from './components/HAChoreList'
import { differenceInMilliseconds, getHours, isPast, startOfTomorrow, set } from 'date-fns'
import { css } from '@emotion/react'
import {NightlyRefresh} from './components/NightlyRefresh'

const lightTheme = css({
  color: '#666666',
  backgroundColor: 'black',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh'
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
      <HAChoreList displayDay={displayDate}/>
      <NightlyRefresh/>
    </div>
  )
}