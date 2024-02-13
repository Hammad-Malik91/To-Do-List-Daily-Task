import React from "react";

function ToDoItem(props) {
    return (
      <div className="todo-item">
        <div className="text-column">
          <li>{props.text}</li>
        </div>
        <div className="button-column">
          <button onClick={() => {
            props.onChecked(props.id)
          }}>Delete</button>
        </div>
      </div>
    );
  }

export default ToDoItem;
