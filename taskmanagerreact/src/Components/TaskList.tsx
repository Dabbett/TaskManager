import React from 'react'
import "./styles.css"
import { Task } from './model'
import TaskItem from './TaskItem'
import { Droppable } from 'react-beautiful-dnd';

interface Props{
    tasks:Task[];
    setTasks:React.Dispatch<React.SetStateAction<Task[]>>
    completedTasks:Task[]
    setCompletedTasks:React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskList: React.FC<Props> = ({tasks, setTasks, completedTasks, setCompletedTasks}) => {
  return (
    <div className='container'>
      <Droppable droppableId='TaskList' >
        {
          (provided) => (
            <div className='tasks' ref={provided.innerRef} {...provided.droppableProps}>
              <span className='tasks-heading'>
          Open Tasks
              </span>
            {tasks.map((task, index) => {
              return(
              <TaskItem 
              index={index}
              task={task}
              tasks={tasks}
              key={task.id}
              setTasks={setTasks}
              />
              )
            })}
          </div>
          )
        }
      
      </Droppable>
      <Droppable droppableId='TaskRemove'>
        {(provided)=> (
      
      <div 
        className='tasks remove'
        ref={provided.innerRef}
        {...provided.droppableProps}>
      <span className='tasks-heading'>
          Completed Tasks
        </span>
      {completedTasks.map((task, index) => {
          return(
          <TaskItem 
          index={index}
          task={task}
          tasks={completedTasks}
          key={task.id}
          setTasks={setCompletedTasks}
          />
          )
        })}
      </div>
        )}
      </Droppable>
    </div>
  )
}

export default TaskList
