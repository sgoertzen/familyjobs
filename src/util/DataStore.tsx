import { getISOWeek } from 'date-fns';
import data from '../data.json';

export type AssignedChores = {
  choreName:string,
  personName:string
}

export type ChoreDay = {
  date:Date,
  chores:AssignedChores[]
} 

type DailySchedule = {
  Sunday?:string,
  Monday?:string,
  Tuesday?:string,
  Wednesday?:string,
  Thursday?:string,
  Friday?:string,
  Saturday?:string,
}

export const getChoreList = (lookupDay:Date):ChoreDay => {

    let choreDay:ChoreDay = {
      date: lookupDay,
      chores: []
    }
    
    let lookupDayOfWeek:number = lookupDay.getDay();
    // let lookupDayOfWeekName:string = "Sunday"

    // Get all daily chores and fill our chore day
    data.chores.filter(c => c.dailySchedule !== undefined).map((c) => {
      // Don't need this line due to filter above, but get errors with out it
      if (c.dailySchedule === undefined) { return null}

      let assignee = getAssigneeForDay(c.dailySchedule, lookupDayOfWeek)
      if (assignee && assignee.length > 0) {
        choreDay.chores.push({choreName: c.name, personName: assignee})
      }
      return null
    })

    // Get all weeekly chores and fill our chore day
    data.chores.filter(c => c.weeklySchedule !== undefined).map((c) => {
      // Don't need this line due to filter above, but get errors with out it
      if (c.weeklySchedule === undefined) { return null }

      let assignee = getAssigneeForWeek(c.weeklySchedule.weekAssignee, c.weeklySchedule.daysOfWeek, lookupDay)
      if (assignee && assignee.length > 0) {
        choreDay.chores.push({choreName: c.name, personName: assignee})
      }
      return null
    })

    return choreDay
  }

  export const getAssigneeForDay = (dailySchedule:DailySchedule, lookupDayOfWeek:number):string|undefined => {
    if (!dailySchedule ) {
      return undefined
    }
    switch(lookupDayOfWeek) {
      case 0: return dailySchedule.Sunday
      case 1: return dailySchedule.Monday
      case 2: return dailySchedule.Tuesday
      case 3: return dailySchedule.Wednesday
      case 4: return dailySchedule.Thursday
      case 5: return dailySchedule.Friday
      case 6: return dailySchedule.Saturday
      default: return undefined
    }
  }
  
  export const getAssigneeForWeek = (weekAssignee:string[], daysOfWeek:number[], lookupDay:Date):string|undefined => {
    if (!weekAssignee) {
      return undefined
    }
    let weekModulus = getISOWeek(lookupDay) % weekAssignee.length

    // // See if the day of the week matches the chore
    if (daysOfWeek.some(d => d === lookupDay.getDay())) {
      return weekAssignee[weekModulus]
    }
    return ""
  }
  