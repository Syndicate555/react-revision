import React from 'react'

const AddTask = () => {
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
