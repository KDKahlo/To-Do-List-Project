import "./styles.css";
import React, { useState } from "react";
import NewToDoForm from "./NewToDoForm";
import { v4 as uuidv4 } from "uuid";

export default function App() {
 
//ADDING NEW VALUES TO AN ARRAY STEP 1: Add the new item to the current array.
//it will start off as an empty array.
//this new state will take the todos array and 
//use the setTodos function to add the new item to the array.
  const [todos, setTodos] = useState([]);

  //ADDING NEW VALUES TO AN ARRAY STEP 2: Create a new function to add the new item to the state.
  //this function is allowing us to add and store new items to the list as the user types them.
  function addToDo(title) {
  
    console.log("Form submitted");
    //inside my new function handleSubmit,
    // I need to add another function that will add the new item to the state.
    //I just setTodos from my above state to do this and pass currentTodos as my parameter.
    //currentTodos will be an array with the new item we want to add.
    setTodos(currentTodos => {
      return [...currentTodos,
        //we need to set an individual id for each item in the array.
        // using title as the parameter for the function addToDo(), and bring the title to the
        // there current object  
        {id: uuidv4(), 
          title, 
          completed: false},
      ]
    })
    //resets the new item label box to an empty box/string
  
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
  {/* used to communicate with NewToDoForm.jsx */}
   <NewToDoForm addToDo = {addToDo}/>
  <h1 className="header">ToDo List</h1>
  
  <ul className="todo-list">
    {todos.length === 0 && "Nothing to do yet!"}
  {todos.map(todo => {
    //we always need a key to identify each item in the array.
    //using the index is not good practice so I am using id which 
    //i set above to be: 'id: currentTodos.length + 1'
 return  <li key={todo.id}>
 <label>
   <input type="checkbox" checked={todo.completed} 
   onChange={e => toggleToDo(todo.id, e.target.checked)}/>
  {todo.title}
 </label>
{/*below we are calling the deleteToDo function to run onClick*/}  
 <button onClick={() => deleteToDo(todo.id)} className="btn btn-danger"> Delete</button> 

</li>
  })}
   
  </ul>
  </>
  )
}
