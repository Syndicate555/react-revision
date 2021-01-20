import React from 'react'
import Task from './Task'
const Tasks = (props) => {
    
    return (
        <>
        {props.tasks.map((task) => (
            <Task key = {task.id} task = {task} delete = {props.onDelete} reminder = {props.toggleReminder}/>
        ))}
        </>
    )
}

export default Tasks
