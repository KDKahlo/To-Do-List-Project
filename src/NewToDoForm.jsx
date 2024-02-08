
import React, { useState } from "react";
export default function NewToDoForm({addToDo}) {

 //ADDING A VALUE STEP 1: Create a new state.
  //to add a new item we need to create a state.
  //the state will take an array with the new item we want to add.
  //and it will take the function to add the item ----> below code
  const [newItem, setNewItem] = useState("");


  function handleSubmit(e) {
    //below code prevents my page from refreshing
    e.preventDefault();
    console.log("Form submitted");
    addToDo(newItem); 

    setNewItem("");
  }




    return (

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
    )
}