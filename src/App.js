import React from "react";
import TodoItem from "./components/TodoItem";


function App() {
  return (
    <div>
      <h1>My todo list</h1>
      <TodoItem todo="Finish plus project." />
      <TodoItem todo="Meal prep." />
      <TodoItem todo="Sleep." />
    </div>
  );
}

export default App;
