import React from 'react';

type ChoreProps = {
    name: string,
    assignee: string
}

export const DailyChoreItem = ({name, assignee}: ChoreProps) => <h1>{ name }: { assignee }</h1>;