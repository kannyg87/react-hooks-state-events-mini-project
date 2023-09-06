import React from "react";
import Task from "./Task";

function TaskList({ list, handleDelete }) {

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {list.map((el, index) => 
        <Task key={index} task={el} handleDelete={ handleDelete} />)}
      
    </div>
  );
}

export default TaskList;
