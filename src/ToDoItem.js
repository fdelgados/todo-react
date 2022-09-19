import React from "react";

const ToDoItem = (props) => {
    const {id, text, checked, deleteItem, toggleSelected} = props;

    return (
        <>
            <p id={id}>
                <input type="checkbox" checked={checked} onChange={() => toggleSelected(id)} /> {text}
            </p>
            <button type="button" onClick={() => deleteItem(id)}>Delete</button>
        </>
    );
};

export default ToDoItem;
