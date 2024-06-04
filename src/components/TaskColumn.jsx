import React from "react";

import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = (props) => {
  //   console.log(props);
  let { taskTitle, taskIcon } = props;
  console.log(taskTitle);
  // we can use above variablöes or can use directly props in HTML like {props.taskTitle} {props.taskIcon}

  return (
    <section className="task_col">
      <h3 className="task_col_header">
        <img src={taskIcon} alt="" className="task_col_Icon" />
        {taskTitle}
      </h3>
      <TaskCard />
    </section>
  );
};

export default TaskColumn;
