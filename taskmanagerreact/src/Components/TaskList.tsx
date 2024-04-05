import React from 'react'
import "./styles.css"
import { Task } from './model'
import TaskItem from './TaskItem'

interface Props{
    tasks:Task[];
    setTasks:React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskList: React.FC<Props> = ({tasks, setTasks}) => {
  return (
    <div className='container'>
      <div className='tasks'>
        <span className='tasks-heading'>
          Open Tasks
        </span>
        {tasks.map((task) => {
          return(
          <TaskItem 
          task={task}
          tasks={tasks}
          key={task.id}
          setTasks={setTasks}
          />
          )
        })}
      </div>

      <div className='tasks remove'>
      <span className='tasks-heading'>
          Completed Tasks
        </span>
      {tasks.map((task) => {
          return(
          <TaskItem 
          task={task}
          tasks={tasks}
          key={task.id}
          setTasks={setTasks}
          />
          )
        })}
      </div>
      
    </div>
  )
}

export default TaskList
