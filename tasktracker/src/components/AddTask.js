import React from 'react'
import {useState} from 'react'
const AddTask = () => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState('')
    return (
        <form className = 'add-form'>
            <div className = "form-control">
                <label>Task Assignment</label>
                <input type = 'text' placeholder = 'Add Task'/>
            </div>
             <div className = "form-control">
                <label>Date & Time</label>
                <input type = 'text' placeholder = 'Add Date and Time'/>
            </div>
             <div className = "form-control form-control-check">
                <label>Set Reminder</label>
                <input type = 'checkbox'/>
            </div>
            <input type = "submit" className = "btn btn-block" value = "Add Task"/>
            
        </form>
    )
}

export default AddTask
