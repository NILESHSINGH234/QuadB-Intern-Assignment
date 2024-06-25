import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/taskSlice';

// Configuring the Redux store
const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;
