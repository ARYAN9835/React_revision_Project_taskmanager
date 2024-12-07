import React, {useState} from 'react'

const Taskform = ( {addTask}) => { 
  const [name, setName] = useState('');
  const [des, setdes] = useState('');
  const [priority, setPriority] = useState('low');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
        id: Date.now(),
        name,
        des,
        priority
    };
    console.log(newTask);
    addTask(newTask);
    setName('');
    setdes('');
    setPriority('low');
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={name}
            placeholder='Enter your name'
            onChange={(e) => setName(e.target.value)}
        />
        <textarea
            placeholder='Enter your task description'
            value={des}
            onChange={(e) => setdes(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value={'low'}>Low</option>
            <option value={'medium'}>Medium</option>
            <option value={'high'}>High</option>
        </select>
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Taskform;