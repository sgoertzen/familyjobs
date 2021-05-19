import '@testing-library/jest-dom/extend-expect'
import { getChoreList } from './DataStore';

test('Basic Chores Test', () => {
    let chorelist = getChoreList(new Date("2021-01-01T13:10:02"))
    expect(chorelist.chores.length).toBeGreaterThanOrEqual(4);
})

test('Weekend Test', () => {
    let chorelist = getChoreList(new Date("2021-05-22T13:10:02"))
    expect(chorelist.chores.length).toBeGreaterThanOrEqual(5);
})