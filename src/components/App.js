import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] =useState(CATEGORIES)
  
  const handleDelete = (taskToDelete) => {
    const updateTasks = tasks.filter(task => taskToDelete.text !== task.text)
    setTasks(updateTasks)
  }

  function handleSubmitnewOb(newtasks) {
    setTasks([...tasks,newtasks])
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter  />
      <NewTaskForm categories={categories} handleAdd={handleSubmitnewOb} />
      <TaskList list={tasks} handleDelete={ handleDelete} />
    </div>
  );
}

export default App;
