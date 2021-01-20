import React from 'react'
import {FaTimesCircle, FaRegListAlt,FaClock} from 'react-icons/fa'
const Task = (props) => {
    return (
        <div className = 'task'>
            <h3><FaRegListAlt/>{props.task.text}<FaTimesCircle style={{color:'red'}} onClick = {props.delete}/> </h3>
            <p><FaClock style={{paddingRight:"100px", }}/>{props.task.day}</p>
            
        </div>
    )
}

export default Task
