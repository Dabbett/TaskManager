import React, { useState } from 'react';
import './App.css';
import InputField from './Components/InputField';
import { Task } from './Components/model';
import TaskList from './Components/TaskList';
import { DragDropContext } from 'react-beautiful-dnd';


const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([])

  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault()

    if(task){
      setTasks([...tasks,{id: Date.now(), task, isDone:false}]);
      setTask("")
    }
    
  }

  return (
    <DragDropContext onDragEnd={() => {}}>
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
