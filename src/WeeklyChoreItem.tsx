import React from 'react';

type ChoreProps = {
    name: string,
    assignee: string
}

export const WeeklyChoreItem = ({name, assignee}: ChoreProps) => <h2>{ name }: { assignee }</h2>;