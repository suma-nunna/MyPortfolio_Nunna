import React, { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";

import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

// const savedTasks = localStorage.getItem("taskList");

const App = () => {
  const savedTasks = localStorage.getItem("taskList");

  const [tasks, setTasks] = useState(JSON.parse(savedTasks) || []);
  // if savedTasks returns null then it will assign with []

  console.log("T ", tasks);

  // regarding useEffect ref or def check the notes
  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(tasks));
  }, [tasks]);
  // localstorage only access to the string format

  const handleDeleteTask = (taskIndex) => {
    const filteredTasks = tasks.filter((ele, index) => index !== taskIndex);
    setTasks(filteredTasks);
  };

  return (
    <div className="app">
      {/* <TaskForm></TaskForm> */}
      {/* we cna use both open and close tags or self clossing tag */}
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        {/* <section className='task_col'>Section 1</section> */}

        <TaskColumn
          taskTitle="To Do"
          taskIcon={todoIcon}
          tasks={tasks}
          status="todo"
          handleDeleteTask={handleDeleteTask}
        />

        <TaskColumn
          taskTitle="Doing"
          taskIcon={doingIcon}
          tasks={tasks}
          status="doing"
          handleDeleteTask={handleDeleteTask}
        />

        <TaskColumn
          taskTitle="Done"
          taskIcon={doneIcon}
          tasks={tasks}
          status="done"
          handleDeleteTask={handleDeleteTask}
        />

        {/* <section className='task_col'>Section 2</section>
        <section className='task_col'>Section 3</section> */}
      </main>
    </div>
  );
};

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
