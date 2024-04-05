import React, { useEffect, useRef, useState } from 'react'
import { Task } from './model'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import "./styles.css";
import { Draggable } from 'react-beautiful-dnd';


type Props = {
  index: number;
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskItem = ({ index, task, tasks, setTasks}: Props) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [editTask, setEditTask] = useState<string>(task.task)


  const handleDone = (id: number)=> {
    setTasks(tasks.map((task)=> task.id === id?{...task,isDone:!task.isDone}: task));
  };
  
  const handleDelete = (id: number)=> {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number)=> {
    e.preventDefault();

    setTasks(tasks.map((task)=> (
      task.id === id? {...task,task:editTask} : task
    )))
    setEdit(false);
  };

  useEffect(()=> {
    inputRef.current?.focus()
  }, [edit])

  const inputRef = useRef<HTMLInputElement>(null)
  
  
  
  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <form className='tasks-single' onSubmit={(e) => handleEdit(e,task.id)}
          {...provided.draggableProps}{...provided.dragHandleProps} ref={provided.innerRef}
        >
          {edit? (
                <input 
                ref={inputRef} 
                value={editTask}
                onChange={(e) => setEditTask(e.target.value)} 
                className='tasks-single--text'/>
            ): (
              task.isDone ? (
                <s className='tasks-single--text'>{task.task}</s>
              ):(
                <span className='tasks-single--text'>{task.task}</span>
              )
            )
          }
          
            
          <div>
            <span className='icon' onClick={()=>{
              if(!edit && !task.isDone){
                setEdit(!edit)
              }}
            }>
              <AiFillEdit/>
            </span>
            <span className='icon' onClick={()=> handleDelete(task.id)}>
              <AiFillDelete/>
            </span>
            <span className='icon' onClick={()=> handleDone(task.id)}>
              <MdDone />
            </span>
          </div>
        </form>
        )}
      </Draggable>
  )};

export default TaskItem
