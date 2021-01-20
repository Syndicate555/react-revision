import React from 'react'
import {FaTimesCircle, FaRegListAlt,FaClock} from 'react-icons/fa'
const Task = (props) => {
    return (
        <div className = {`task ${props.task.reminder ? 'reminder' : ''}`} onDoubleClick = {() => props.reminder(props.task.id)}>
            <h3><FaRegListAlt/>{props.task.text}<FaTimesCircle style={{color:'red'}} onClick = { () => props.delete(props.task.id)}/> </h3>
            <p><FaClock style={{paddingRight:"100px", }}/>{props.task.day}</p>
            
        </div>
    )
}

export default Task
