import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { getMillisecondsUntilEgg } from './EasterEgg'
import { set } from 'date-fns'

// We allow for a range as the test can take a few milliseconds to complete, which will change the number

test('Verify at 3:00am', () => {
    let milli = getMillisecondsUntilEgg(set(new Date(), {hours: 3, minutes: 0, seconds: 0}))
    expect(milli).toBeGreaterThanOrEqual(34200000)
    expect(milli).toBeLessThanOrEqual(34200100)
})

test('Verify at 12:29pm', () => {
    let milli = getMillisecondsUntilEgg(set(new Date(), {hours: 12, minutes: 29, seconds: 0}))
    expect(milli).toBeGreaterThanOrEqual(60000)
    expect(milli).toBeLessThanOrEqual(60100)
})

test('Verify at 6:29pm', () => {
    let milli = getMillisecondsUntilEgg(set(new Date(), {hours: 18, minutes: 29, seconds: 0}))
    expect(milli).toBeGreaterThanOrEqual(60000)
    expect(milli).toBeLessThanOrEqual(60100)
})

test('Verify at 6:31pm', () => {
    let milli = getMillisecondsUntilEgg(set(new Date(), {hours: 18, minutes: 31, seconds: 0}))
    // Time until tomorrow's 12:30
    expect(milli).toBeGreaterThanOrEqual(64740000)
    expect(milli).toBeLessThanOrEqual(64740100)
})