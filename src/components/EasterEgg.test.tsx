import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { getMillisecondsUntilEgg } from './EasterEgg'
import { setMinutes, setHours } from 'date-fns'

// We allow for a range as the test can take a few milliseconds to complete, which will change the number

test('Verify at 3:00am', () => {
    let milli = getMillisecondsUntilEgg(setMinutes(setHours(new Date(), 3), 0))
    expect(milli).toBeGreaterThanOrEqual(34200000)
    expect(milli).toBeLessThanOrEqual(34200100)
})

test('Verify at 12:29pm', () => {
    let milli = getMillisecondsUntilEgg(setMinutes(setHours(new Date(), 12), 29))
    expect(milli).toBeGreaterThanOrEqual(60000)
    expect(milli).toBeLessThanOrEqual(60100)
})

test('Verify at 6:29pm', () => {
    let milli = getMillisecondsUntilEgg(setMinutes(setHours(new Date(), 18), 29))
    expect(milli).toBeGreaterThanOrEqual(60000)
    expect(milli).toBeLessThanOrEqual(60100)
})

test('Verify at 6:31pm', () => {
    let milli = getMillisecondsUntilEgg(setMinutes(setHours(new Date(), 18), 31))
    // Time until tomorrow's 12:30
    expect(milli).toBeGreaterThanOrEqual(64740000)
    expect(milli).toBeLessThanOrEqual(64740100)
})