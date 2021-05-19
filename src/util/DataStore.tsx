import { getWeek } from 'date-fns';
import data from '../data.json';

export type AssignedChores = {
  choreName:string,
  personName:string
}

export type ChoreDay = {
  date:Date,
  chores:AssignedChores[]
} 

export const getChoreList = (lookupDay:Date):ChoreDay => {

    let choreDay:ChoreDay = {
      date: lookupDay,
      chores: []
    }
    
    
    let lookupDayOfWeek:number = lookupDay.getDay();
    data.days.filter(cd => cd.dayOfWeek === lookupDayOfWeek).map((cd) => {
      choreDay.chores.push({choreName: "Dishes Load", personName: cd.dishesLoad})
      choreDay.chores.push({choreName: "Dishes Unload", personName: cd.dishesUnload})
      choreDay.chores.push({choreName: "Walk Morning", personName: cd.walkMorning})
      choreDay.chores.push({choreName: "Walk Evening", personName: cd.walkEvening})
      return cd
    })

    let weekModulus = getWeek(lookupDay) % 4
    data.weeks.filter(wd => wd.week === weekModulus).filter(wd => wd.daysOfWeek.includes(lookupDayOfWeek)).map((wd) => {
      choreDay.chores.push({choreName: "Sort Laundry", personName: wd.sortLaundry})
      return wd
    })

    return choreDay
  }
  