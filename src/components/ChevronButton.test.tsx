import React from 'react';
import { getByRole, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ChevronButton, ChevronDirection } from './ChevronButton';

test('Verify left arrow shows', () => {
    let testprops = {direction: ChevronDirection.Left, onClick: () => {}}
    render(<ChevronButton  {...testprops}/>)
    expect(screen.getByTitle('leftchevron')).toBeDefined()
})
test('Verify right arrow shows', () => {
    let testprops = {direction: ChevronDirection.Right, onClick: () => {}}
    render(<ChevronButton  {...testprops}/>)
    expect(screen.getByTitle('rightchevron')).toBeDefined()
})