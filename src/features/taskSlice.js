import { createSlice } from '@reduxjs/toolkit';

// Initial state, loading from localStorage if available
const initialState = JSON.parse(localStorage.getItem('todos')) || [];

// Creating the task slice
const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // Action to add a task
    addTask: (state, action) => {
      state.push({ id: action.payload.id, todo: action.payload.todo, isCompleted: false });
      localStorage.setItem('todos', JSON.stringify(state));
    },
    // Action to delete a task
    deleteTask: (state, action) => {
      const updatedState = state.filter(task => task.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(updatedState));
      return updatedState;
    },
    // Action to edit a task
    editTask: (state, action) => {
      const { id, todo } = action.payload;
      const task = state.find(task => task.id === id);
      if (task) task.todo = todo;
      localStorage.setItem('todos', JSON.stringify(state));
    },
    // Action to toggle task completion
    toggleTaskCompletion: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) task.isCompleted = !task.isCompleted;
      localStorage.setItem('todos', JSON.stringify(state));
    },
  },
});

// Exporting the actions
export const { addTask, deleteTask, editTask, toggleTaskCompletion } = taskSlice.actions;

// Exporting the reducer
export default taskSlice.reducer;
