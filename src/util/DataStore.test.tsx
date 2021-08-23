import '@testing-library/jest-dom/extend-expect'
import { getChoreList, getAssigneeForWeek, getAssigneeForDay } from './DataStore';

test('Basic Chores Test', () => {
    let chorelist = getChoreList(new Date("2021-01-01T13:10:02"))
    expect(chorelist.chores.length).toBeGreaterThanOrEqual(3);
})

test('Weekend Test', () => {
    let chorelist = getChoreList(new Date("2021-05-22T13:10:02"))
    expect(chorelist.chores.length).toBeGreaterThanOrEqual(4);
})

test ('Test getAssigneeForDay - All Filled', () => {
    let dailySchedule = {
        "Sunday":"A",
        "Monday":"B",
        "Tuesday":"C",
        "Wednesday":"D",
        "Thursday":"E",
        "Friday":"F",
        "Saturday":"G"
    }
    let lookupDayOfWeek = 2

    let assignee = getAssigneeForDay(dailySchedule, lookupDayOfWeek)

    expect(assignee).toBe('C')
})

test ('Test getAssigneeForDay - Part Filled', () => {
    let dailySchedule = {
        "Sunday":"A",
        "Monday":"B",
        "Tuesday":"",
        "Wednesday":"",
        "Thursday":"",
        "Friday":"F",
        "Saturday":"G"
    }
    let lookupDayOfWeek = 2

    let assignee = getAssigneeForDay(dailySchedule, lookupDayOfWeek)

    expect(assignee).toBe("")
})


test ('getAssigneeForWeek', () => {
    let weekAssignee = ['A', 'B', 'C']
    let daysOfWeek = [0,1,2,3,4,5,6]
    let lookupDay = new Date(2021, 0, 18)
    let assignee = getAssigneeForWeek(weekAssignee, daysOfWeek, lookupDay)
    expect(assignee).toBe('A')
})

test ('getAssigneeForWeek2', () => {
    let weekAssignee = ['A', 'B', 'C']
    let daysOfWeek = [0,1,2,3,4,5,6]
    let lookupDay = new Date(2021, 0, 11)
    let assignee = getAssigneeForWeek(weekAssignee, daysOfWeek, lookupDay)
    expect(assignee).toBe('C')
})

test ('getAssigneeForWeek', () => {
    let weekAssignee = ['A', 'B', 'C']
    let daysOfWeek = [0,1,2,3,4,5,6]
    let lookupDay = new Date(2021, 0, 25)
    let assignee = getAssigneeForWeek(weekAssignee, daysOfWeek, lookupDay)
    expect(assignee).toBe('B')
})

test ('getAssigneeForWeek', () => {
    let weekAssignee = ['A', 'B', 'C']
    let daysOfWeek = [1]
    let lookupDay = new Date(2021, 0, 25)
    let assignee = getAssigneeForWeek(weekAssignee, daysOfWeek, lookupDay)
    expect(assignee).toBe('B')
})

test ('getAssigneeForWeek', () => {
    let weekAssignee = ['A', 'B', 'C']
    let daysOfWeek = [4]
    let lookupDay = new Date(2021, 0, 25)
    let assignee = getAssigneeForWeek(weekAssignee, daysOfWeek, lookupDay)
    expect(assignee).toBe('')
})