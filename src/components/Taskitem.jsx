import React, { useState } from 'react';

const TaskItem = ({task, editTask, deleteTask}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    editTask(task.id, editedTask);
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTask.name}
            onChange={(e) => setEditedTask({ ...editedTask, taskName: e.target.value })}
          />
          <textarea
            value={editedTask.des}
            onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
          />
          <select
            value={editedTask.priority}
            onChange={(e) => setEditedTask({ ...editedTask, priority: e.target.value })}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{task.name}</h3>
          <p>{task.des}</p>
          <p>Priority: {task.priority}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
