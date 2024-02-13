import React, { useState } from "react";
import InputArea from "./InputArea.jsx";
import ToDoItem from "./ToDoItem";

function App() {

  const currentDate = new Date();




  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

 function addItems(inputText)
 {
     setItems((previousValue)=>{

        return [...previousValue,inputText];
});

 }




  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List For Daily Working</h1>
        <p>{currentDate.toDateString()}</p>
       
      </div>
      <InputArea onAdd={addItems} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
