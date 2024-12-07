import React from 'react';
import Taskitem from './Taskitem';

const Tasklist = ({ tasks, filter, editTask, deleteTask }) => {
  return (
    <div style = {{backgroundColor : 'blue'}}>
      {tasks.length === 0 ? (
        <p>No Tasks Available</p>
      ) : (
        tasks.filter((task) => filter === 'All' || task.priority === filter)
        .map((task) => (
          <div key={task.id} style = {{backgroundColor : 'red'}}>
          <Taskitem
            task={task}
            editTask={editTask}
            deleteTask={deleteTask}
          />
          </div>
        ))
      )}
    </div>
  );
};

export default Tasklist;
