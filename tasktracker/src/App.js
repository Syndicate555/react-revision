import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Do grocery shopping',
            day: 'Feb 5th at 2:30pm',
            reminder: true,

        },
        {
            id: 2,
            text: 'Doctor Appointment',
            day: 'Feb 7th at 2:30pm',
            reminder: true,

        },
        {
            id: 3,
            text: 'Do laundry',
            day: 'Feb 20th at 2:30pm',
            reminder: true,

        },
        {
            id: 4,
            text: 'Meet with the team',
            day: 'Feb 11th at 2:30pm',
            reminder: true,

        },
    ])

  // Deleting a task
  const deleteTask =(id) =>{
    setTasks(tasks.filter((task) => task.id !== id ))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    console.log('id')

  }
  return (
    <div className = "container" >
      <Header title = "Task Master  V2.0"/>
      {tasks.length > 0 ? (
      <Tasks tasks = {tasks} onDelete = {deleteTask} onReminder = {toggleReminder}/>
      ): (
        'No Task is assigned'
      )}

    </div>
  );
}

export default App;
