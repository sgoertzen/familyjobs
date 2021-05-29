/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import React, { useEffect, useState } from 'react'
import { ChoreList } from './components/ChoreList'
import { Clock } from './components/Clock'
import { Disclaimer } from './components/Disclaimer'
import { differenceInMilliseconds, getHours, startOfTomorrow } from 'date-fns'
import { EasterEgg } from './components/EasterEgg'
import { BirthdayConfetti } from './components/BirthdayConfetti'
import { css } from '@emotion/react'

export const lightTheme = css({
  color: 'white',
  textAlign: 'center'
})

export const darkTheme = css({
  color: '#666666',
  backgroundColor: 'black',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh'
})

export const App = () => {

  const [displayDate, setDisplayDate] = useState(new Date())

  useEffect(() => {
        let diff = differenceInMilliseconds(startOfTomorrow(), displayDate)
        setTimeout(() => { setDisplayDate(new Date()) }, diff)
    }, [displayDate]
  )

  let currentHour = getHours(new Date())
  let nightMode = (currentHour < 7 || currentHour > 23)

  return (
    <div className="App" css={nightMode ? darkTheme : lightTheme}>
      <ChoreList displayDay={displayDate}/>
      <Clock/>
      <Disclaimer/>
      <EasterEgg/>
      <BirthdayConfetti/>
    </div>
  )
}