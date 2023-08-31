import React from 'react'
import '../styles/Tasks.css'
import Task from './Task'

const Tasks = () => {
  return (
    <div   className='task_list' >
         TASK LIST
           <Task />
           <Task />
           <Task />
           <Task />
           <Task />
    </div>
  )
}

export default Tasks