import "./styles.css";
import React, { useState } from "react";
export default function App() {
  //ADDING A VALUE STEP 1: Create a new state.
  //to add a new item we need to create a state.
  //the state will take an array with the new item we want to add.
  //and it will take the function to add the item ----> below code
  const [newItem, setNewItem] = useState("");
//ADDING NEW VALUES TO AN ARRAY STEP 1: Add the new item to the current array.
//it will start off as an empty array.
//this new state will take the todos array and 
//use the setTodos function to add the new item to the array.
  const [todos, setTodos] = useState([]);

  //ADDING NEW VALUES TO AN ARRAY STEP 2: Create a new function to add the new item to the state.
  //this function is allowing us to add and store new items to the list as the user types them.
  function handleSubmit(e) {
    //below code prevents my page from refreshing
    e.preventDefault();
    console.log("Form submitted");
    //inside my new function handleSubmit,
    // I need to add another function that will add the new item to the state.
    //I just setTodos from my above state to do this and pass currentTodos as my parameter.
    //currentTodos will be an array with the new item we want to add.
    setTodos(currentTodos => {
      return [...currentTodos,
        //we need to set an individual id for each item in the array.
        {id: currentTodos.length + 1, text: newItem, completed: false},
      ]
    })
    //resets the new item label box to an empty box/string
    setNewItem("");
  }
  //this function will take the id and a boolean value of completed
  // to toggle the completed status of the item
  //and allow us to use the checked property of the item.
  function toggleToDo(id, completed) {
    console.log(id);
    console.log(completed);
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed:!todo.completed};
        
        }
        return todo;
      })
    }) 
  }
  //this function will take the id of the item we want to delete from the state
  // and allows us to delete the item from the state.
  function deleteToDo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id!== id);
    })
  }
  return (
    // below the onSubmit is the event listener for the handleSubmit function above
    //WE ARE PASSING A FUNCTION HERE  TO ADD THE NEW ITEM TO THE ARRAY OF ITEMS.
  <>
    <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item"></label>
  
  <input type="text" 
         //ADD A VALUE STEP 2: Set the value of your input. 
         //here we are declaring that the value will be equal 
         //to the newItem value entered by the user.
         value= {newItem}
         //ADD A VALUE STEP 3: Create a function that will update 
         //the state each time a new item is added.
         //we use onChange as the eventlistener for the input.
         //e is the event object and target is the input element.
         //WE ARE PASSING A NEW VALUE HERE
         onChange={e => setNewItem(e.target.value)} 
         //placeholder is the text that holds the place of where the user will input information.
         placeholder="New Item"  
         id="item" 
         />
  </div>
  <button className= "btn">Add Item</button>
  
  </form>
  <h1 className="header">ToDo List</h1>
  
  <ul className="todo-list">
    {todos.length === 0 && "Nothing to do yet!"}
  {todos.map(todo => {
    //we always need a key to identify each item in the array.
    //using the index is not good practice so I am using id which 
    //i set above to be: 'id: currentTodos.length + 1'
 return  <li key={todo.id}>
 <label>
   <input type="checkbox" checked={todos.completed} 
   onChange={e => toggleToDo(todo.id, e.target.checked)}/>
  {todo.text}
 </label>
{/*below we are calling the deleteToDo function to run onClick*/}  
 <button onClick={() => deleteToDo(todo.id)} className="btn btn-danger"> Delete</button> 

</li>
  })}
   
  </ul>
  </>
  )
}
