import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { DailyChoreItem } from './DailyChoreItem';

test('Verify name and assignee show', () => {
    let testprops = {name: "sweep", assignee:"trakel"}
    const { container, getByText } = render(<DailyChoreItem  {...testprops}/>)
    expect(getByText('sweep', {exact:false})).toBeDefined()
    expect(getByText('trakel', {exact:false})).toBeDefined()
})