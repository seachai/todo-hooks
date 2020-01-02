import React, { useState } from "react";
import List from "./List";

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    value !== ""
      ? setTodo([
          {
            value,
            completed: false
          },
          ...todo
        ])
      : console.log("Enter a valid string bitch.");
    setValue("");
  };

  const handleChange = e => {
    setValue(e.target.value);
  };

  const toggleCompleted = e => {
    setCompleted(!completed);
    strike(e);
  };

  const strike = e => {
    let todoValue = e.target;
    console.log(todoValue);
    return completed
      ? (todoValue.style.textDecoration = "line-through")
      : (todoValue.style.textDecoration = "none");
  };

  return (
    <div>
      <List todo={todo} toggleComplete={toggleCompleted} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="todo-input"
          value={value}
          onChange={handleChange}
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoList;
