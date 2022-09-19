import './App.css';
import React, {useState, useEffect} from "react";
import ToDoAdd from "./ToDoAdd";
import ToDoItem from "./ToDoItem";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {

  },[todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const td = {
      text: todo,
      id: new Date().getTime(),
      selected: false,
    };
    const tmpTodos = [...todos, td];

    setTodos(tmpTodos);
    setTodo('');
  };

  const deleteToDo = (id) => {
    const tmpTodos = todos.filter(td => td.id !== id);

    setTodos(tmpTodos);
  };

  const toggleSelect = (id) => {
    const tmpTodos = todos.map(td => {
      if (td.id === id) {
        td.selected = !td.selected;
      }
      return td;
    });

    setTodos(tmpTodos);
  };

  const deleteAllSelectedItems = () => {
    const tmpTodos = todos.filter(td => !td.selected);

    setTodos(tmpTodos);
  };

  return (
    <div className="App">
      <ToDoAdd
          text={todo}
          submit={handleSubmit}
          writeTodo={setTodo}
      />
      {
        todos.map(td => {
          return (
              <ToDoItem key={td.id}
                  id={td.id}
                  text={td.text}
                  checked={td.selected}
                  deleteItem={deleteToDo}
                  toggleSelected={toggleSelect}
              />
          );
        })
      }
      <button type="button" onClick={() => deleteAllSelectedItems()}>Delete all selected items</button>
    </div>
  );
}

export default App;
