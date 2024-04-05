import React, { useState } from 'react';
import './App.css';
import InputField from './Components/InputField';
import { Task } from './Components/model';
import TaskList from './Components/TaskList';


const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault()

    if(task){
      setTasks([...tasks,{id: Date.now(), task, isDone:false}]);
      setTask("")
    }
    
  }

  return (
    <div className="App">
      <span className='heading'>TaskDrag</span>
      <InputField task={task} setTask={setTask} handleAdd={handleAdd}/>
      <TaskList tasks={tasks} setTasks={setTasks} />
      
    </div>
  );
}

export default App;
