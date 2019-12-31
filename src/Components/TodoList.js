import React, { useState } from "react";
import List from "./List";

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState("");

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

  return (
    <div>
      <List todo={todo} />
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
