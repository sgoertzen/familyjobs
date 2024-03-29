/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { useCallback, useEffect, useState } from 'react'
import { ChoreList } from './ChoreList'
import { Clock } from './Clock'
import { Disclaimer } from './Disclaimer'
import { differenceInMilliseconds, getHours, isPast, startOfTomorrow, set } from 'date-fns'
import { EasterEgg } from './EasterEgg'
import {NightlyRefresh} from './NightlyRefresh'
import { RemainingDays } from './RemainingDays'

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

export const StandAlonePage = () => {

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
    <div className="StandAlonePage" css={nightMode ? darkTheme : lightTheme}>
      <ChoreList displayDay={displayDate}/>
      <RemainingDays target={new Date("2022-06-30T09:00:00")} countdownMessage="🏠⬅🚚: %DAYS% days" expiredMessage='I love you family!  Have a great day and see you soon!'/>
      <Clock/>
      <Disclaimer/>
      <EasterEgg/>
      <NightlyRefresh/>
    </div>
  )
}