import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Navbar from './components/Navbar';
import './App.css';

/**
 * Main App component
 */
function App() {
  const [showFinished, setShowFinished] = useState(true); // State to show/hide completed tasks

  /**
   * Toggle the display of completed tasks.
   */
  const toggleFinished = () => {
    setShowFinished(!showFinished);
  };

  return (
    <Provider store={store}>
      <div className="app">
        <Navbar />
        <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] w-full sm:w-[80%] md:w-[50%] lg:w-[35%]">
          <h1 className="font-bold text-center text-3xl my-6">QuadB Tech TODO</h1>
          <TaskInput />
          <div className="my-6 flex items-center justify-center">
            <input
              id="show"
              type="checkbox"
              checked={showFinished}
              onChange={toggleFinished}
              className="mr-2"
            />
            <label className="text-sm" htmlFor="show">Show Finished</label>
          </div>
          <div className="h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2"></div>
          <h2 className="text-2xl font-bold">Your Todos</h2>
          <TaskList showFinished={showFinished} />
        </div>
      </div>
    </Provider>
  );
}

export default App;