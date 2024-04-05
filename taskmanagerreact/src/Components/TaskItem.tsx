import React from 'react'
import { Task } from './model'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'

type Props ={
  task: Task,
  tasks: Task[],
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskItem = ({task, tasks, setTasks}: Props) => {
  return (
    <form className='tasks-single'>
      <span className='tasks-single--text'> 
      {task.task}</span>
      <div>
        <span className='icon'>
          <AiFillEdit/>
        </span>
        <span className='icon'>
          <AiFillDelete/>
        </span>
        <span className='icon'>
          <MdDone />
        </span>
      </div>
    </form>
  )
}

export default TaskItem
