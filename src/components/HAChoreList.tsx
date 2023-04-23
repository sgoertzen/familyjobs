/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React, { useState } from "react"
import { DailyChoreItem } from "./DailyChoreItem"
import { ChoreDay, getChoreList} from "../util/DataStore"
import { HADayDisplay } from "./HADayDisplay"
import { border } from '../styles/style'

type HAChoreListProps = {
  displayDay: Date
}

const rowFlex = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly'
})

const colFlex = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly'
})


export const HAChoreList = (props:HAChoreListProps) => {

  const [choreDay] = useState<ChoreDay>(getChoreList(props.displayDay))

  return (
    <div css={[border, rowFlex]}>
      <div css={colFlex}>
        <HADayDisplay day={choreDay.date}/>
        {choreDay.chores.map((cd) => 
          <DailyChoreItem key={cd.choreName} name={cd.choreName} assignee={cd.personName}/>
        )}
      </div>
    </div>
  );
};