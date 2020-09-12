import React, { useState } from "react";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";



function App() {
//variables

const [todos, setTodos] = useState([
  "Finish plus project",
  "Meal prep",
  "Sleep",
]);


//methods
const addTodo = (text) => {
  const newTodos = [...todos, text];
  setTodos(newTodos);
};



  //template
  return (
    <div>
      <h1>My todo list</h1>
      {todos.map((todo, index) => (
        <TodoItem todo={todo} key={index} />    
      ))}
      <TodoForm addTodo={addTodo} />
    
    </div>   
      // <TodoItem todo="Finish plus project." />
      // <TodoItem todo="Meal prep." />
      // <TodoItem todo="Sleep." />
  );
}

export default App;
