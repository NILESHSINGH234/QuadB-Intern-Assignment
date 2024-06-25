import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTaskCompletion } from '../features/taskSlice';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

/**
 * TaskList component for displaying the list of tasks.
 */
const TaskList = ({ showFinished }) => {
  const tasks = useSelector((state) => state.tasks); // Get tasks from Redux state
  const dispatch = useDispatch(); // Redux dispatch function

  /**
   * Handle deleting a task.
   * @param {number} id - The id of the task to be deleted
   */
  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id)); // Dispatch deleteTask action
  };

  /**
   * Handle editing a task.
   * @param {number} id - The id of the task to be edited
   */
  const handleEditTask = (id) => {
    const newTask = prompt('Edit Task:', tasks.find(task => task.id === id).todo);
    if (newTask) {
      dispatch(editTask({ id, todo: newTask })); // Dispatch editTask action
    }
  };

  /**
   * Handle toggling the completion status of a task.
   * @param {number} id - The id of the task to be toggled
   */
  const handleToggleTask = (id) => {
    dispatch(toggleTaskCompletion(id)); // Dispatch toggleTaskCompletion action
  };

  return (
    <ul className="task-list">
      {tasks.length === 0 && <div className="m-5">No Todos to display</div>}
      {tasks.map(item => (
        (showFinished || !item.isCompleted) && (
          <li key={item.id} className={`todo flex my-3 justify-between ${item.isCompleted ? 'completed' : ''}`}>
            <div className="flex gap-5">
              <input 
                name={item.id} 
                onChange={() => handleToggleTask(item.id)} 
                type="checkbox" 
                checked={item.isCompleted} 
              />
              <div className={item.isCompleted ? 'line-through' : ''}>{item.todo}</div>
            </div>
            <div className="buttons flex h-full">
              <button 
                onClick={() => handleEditTask(item.id)} 
                className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
              >
                <FaEdit />
              </button>
              <button 
                onClick={() => handleDeleteTask(item.id)} 
                className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
              >
                <AiFillDelete />
              </button>
            </div>
          </li>
        )
      ))}
    </ul>
  );
};

export default TaskList;
