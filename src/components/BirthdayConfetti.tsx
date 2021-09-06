
import { getDate, getMonth } from 'date-fns'
import Confetti from 'react-confetti'

export const isBirthday = (day:Date) => {
    return ((getDate(day) === 25 && getMonth(day) === 2) ||
        (getDate(day) === 9 && getMonth(day) === 3) ||
        (getDate(day) === 29 && getMonth(day) === 6) ||
        (getDate(day) === 6 && getMonth(day) === 8) ||
        (getDate(day) === 13 && getMonth(day) === 8))
}

type BirthdayConfettiProps = {
    displayDay: Date
  }

export const BirthdayConfetti = (props: BirthdayConfettiProps) => {
    return (
        isBirthday(props.displayDay) ? <Confetti/> : null
    )
}