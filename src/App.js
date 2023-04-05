import React, { useState } from 'react';
import "./App.css";
function App() {
 //state-Hook
 const [newItem, setNewItem] = useState("");
 const [arr, setArr] = useState([]);

 function addToDo() {
   if (!newItem) {
     alert("Enter Items");
     return;
   }
   const element = {
     id: Math.floor(Math.random() * 1000),
     value: newItem,
   };
   setNewItem("");

   setArr((oldList) => [...oldList, element]);
 }

 function remove(id) {
   const newArr = arr.filter((arrElement) => id !== arrElement.id);
   setArr(newArr);
 }
  return (
    <>
    <div className="main-container">
      <div className="center-container">    
      <div className="input-container">
      <h1 className="app-heading">TO-DO-LIST</h1>     
          <input
            id="inputfield"
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Add items..."
          />
        
          <button className="add-btn" onClick={() => addToDo()}>
            Add
          </button>  
      </div>
      <div>
          <ul>
            {arr.map((element) => {
              return (
                <li className="list-item" id={element.id}>
                  {element.value}
                  <span className='icons'>
                  <i className="fa-solid fa-trash-can icon-delete" onClick={() => remove(element.id)} >
                  </i>
                  </span>
                </li>
              );
            })}
          </ul>
    </div>
    </div>
    </div>
    </>
  );
}

export default App