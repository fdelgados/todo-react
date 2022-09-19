import React from "react";

const ToDoAdd = (props) => {
    const {text, submit, writeTodo} = props;

    return (
        <form onSubmit={submit}>
          <input type="text"
                 value={text}
                 placeholder="Add your item here"
                 onChange={(e) => writeTodo(e.target.value)}/>
          <button type="submit">Add Item</button>
        </form>
    );
};

export default ToDoAdd;