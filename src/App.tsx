import React, { useEffect, useState } from 'react';
import './App.css';
import InputField from './Components/InputField';
import { Task } from './Components/model';
import TaskList from './Components/TaskList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';


const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  });
  const [completedTasks, setCompletedTasks] = useState<Task[]>([])

  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault()

    if(task){
      setTasks([...tasks,{id: Date.now(), task, isDone:false}]);
      setTask("")
    }
  }

  const onDragEnd = (result: DropResult) => {
    const { source, destination} = result

    console.log(result)

    if(!destination){ 
      return;
    }

    if(
      destination.droppableId===source.droppableId && 
      destination.index===source.index){
        return; 
      }
   
    let add, active = tasks;
    let complete = completedTasks

    if(source.droppableId === 'TasksList'){
      add = active[source.index];
      active.splice(source.index, 1)
    }else {
      add = complete[source.index];
      complete.splice(source.index, 1)
    }

    if(destination.droppableId === 'TasksList'){
      active.splice(destination.index, 0, add)
    }else {
      complete.splice(destination.index, 0, add)
    }
    setCompletedTasks(complete);
    setTasks(active);
  }

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(tasks))
  }, [tasks])

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className='heading'>TaskDrag</span>
        <InputField task={task} setTask={setTask} handleAdd={handleAdd}/>
        <TaskList 
        tasks={tasks} 
        setTasks={setTasks} 
        completedTasks={completedTasks} 
        setCompletedTasks={setCompletedTasks}
        />
        
      </div>
    </DragDropContext>
  );

}

export default App;
