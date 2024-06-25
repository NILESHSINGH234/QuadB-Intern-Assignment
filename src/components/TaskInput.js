import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/taskSlice';
import { v4 as uuidv4 } from 'uuid';

/**
 * TaskInput component for adding a new task.
 */
const TaskInput = () => {
  const [task, setTask] = useState(''); // State to store the input task
  const dispatch = useDispatch(); // Redux dispatch function

  /**
   * Handle adding a new task.
   */
  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask({ id: uuidv4(), todo: task })); // Dispatch addTask action
      setTask(''); // Clear the input field
    }
  };

  /**
   * Handle key down event for the input field.
   * @param {Object} e - The event object
   */
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTask(); // Call handleAddTask on Enter key press
    }
  };

  return (
    <div className="task-input">
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        onKeyDown={handleKeyDown} 
        placeholder="Add a new task" 
        className="w-full rounded-full px-5 py-1"
      />
      <button 
        onClick={handleAddTask} 
        disabled={task.length <= 3} 
        className="bg-violet-800 mx-2 my-4 rounded-full hover:bg-violet-950 disabled:bg-violet-500 p-4 py-2 text-sm font-bold text-white"
      >
        Save
      </button>
    </div>
  );
};

export default TaskInput;
