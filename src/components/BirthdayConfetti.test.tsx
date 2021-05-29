import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { isBirthday } from './BirthdayConfetti';


test('Birthday same year', () => {
    // Remember, months are zero based (January = 0)
    let celebrate = isBirthday(new Date(2021, 8, 13))
    expect(celebrate).toBeTruthy()
})
test('Birthday does not match', () => {
    let celebrate = isBirthday(new Date(2021, 5, 11))
    expect(celebrate).toBeFalsy()
})