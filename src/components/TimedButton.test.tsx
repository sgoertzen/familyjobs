import React from 'react';
import { fireEvent, getByRole, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { TimedButton } from './TimedButton'

test('Verify button click event', () => {
    const callback = jest.fn();
    let testprops = {onClick: callback, timeoutMilliseconds:10000}
    const { getByText } = render(<TimedButton  {...testprops}/>)
    fireEvent.click((getByText(/Back To Today/i)))
    expect(callback).toBeCalled()
})

test('Verify button timeout', async () => {
    const callback = jest.fn();
    let testprops = {onClick: callback, timeoutMilliseconds:1}
    render(<TimedButton  {...testprops}/>)
    await waitFor(() => expect(callback).toBeCalled())
})

test('Verify button not timing out on re-render', async () => {
    const donotcallme = jest.fn();
    const callme = jest.fn()

    let { rerender } = render(<TimedButton onClick={donotcallme} timeoutMilliseconds={100}/>)
    rerender(<TimedButton onClick={callme} timeoutMilliseconds={100}/>)
    await waitFor(() => {
            expect(callme).toBeCalled()
            expect(donotcallme).toBeCalledTimes(0)
        }
    )    
})