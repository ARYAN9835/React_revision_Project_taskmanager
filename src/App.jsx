import React, {useState, useEffect} from 'react';
import Taskfilter from './components/Taskfilter';
import Taskform from './components/Taskform';
import Tasklist from './components/Tasklist';

const App = () => {
  const [tasks, setTask] = useState([]);
  const [filter, setFilter] = useState('All');
  
  const addTask = (newTask) => {
    setTask([...tasks, newTask]);
  }
  console.log(tasks);
  const editTask = (id, updated) => {
    setTask(tasks.map((task) => {
      if (task.id === id) {
         return updated
      } else return task;
    }))
  }
  const deleteTask = (idtodelete) => {
    const newarray = tasks.filter((task) => {
      return task.id !== idtodelete;
    }) 
    setTask(newarray);
  }

  return (
    <div>
    <Taskform addTask={addTask} />  
    <Taskfilter setFilter = {setFilter}/>
    <Tasklist tasks={tasks} filter = {filter} editTask={editTask} deleteTask = {deleteTask}/>
    </div>
  )
}

export default App