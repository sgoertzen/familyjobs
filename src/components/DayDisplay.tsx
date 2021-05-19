import { format } from 'date-fns'

type DayDisplayProps = {
    day: Date
}

export const DayDisplay = (props:DayDisplayProps) => {
    return <div>{format(props.day, "eeee MMM do 'chores'")}</div>
}