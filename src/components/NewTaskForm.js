import React, {useState} from "react";

function NewTaskForm({ categories, handleAdd }) {
  
  const [detailes, setDetailes] = useState('')
  const [category, setCategory] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    let newOb = {
      task: detailes,
      category: category
    }

    handleAdd(newOb)

  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={detailes} onChange={(e=>setDetailes(e.target.value))} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e => setCategory(e.target.value))}>
          {/* render <option> elements for each category here */}
          {categories.map((category, index) =>
            category !== "All"?
            <option onChange={(e)=>console.log(e)} key={ index}>{category}</option> : "")}
        </select>
      </label>
      <input type="submit" value="Add Task" />
    </form>
  );
}

export default NewTaskForm;
