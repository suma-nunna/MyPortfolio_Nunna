import React from "react";

import "./TaskForm.css";

const TaskForm = () => {
  return (
    <header className="app_header">
      <form>
        <input
          type="text"
          className="task_title"
          placeholder="Enter your task...."
        />

        <div className="task_form_category">
          <button className="tag">HTML</button>
          <button className="tag">CSS</button>
          <button className="tag">Javascript</button>
          <button className="tag">React</button>

          <select name="" id="" className="task_status">
            <option value="todo">To do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>

          <button type="submit" className="task_submit">
            + Add Task
          </button>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
