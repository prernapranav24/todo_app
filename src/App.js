import React, { useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@mui/material";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "Take dogs for walk",
    "Take the rubbish out",
    "Making todo app with react and firebase",
  ]);
  const [input, setInput] = useState("");

  const addTodo = (event) => {
    // this will fire off when we click the Add Todo button
    event.preventDefault(); // stop the refresh
    setTodos([...todos, input]);
    setInput(""); // clear up the input after hitting submit
    console.log(todos);
  };

  return (
    <div className="App">
      <h1>My Todos📝!</h1>
      <form>
        <FormControl>
          <InputLabel>✅Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
