import React, {useState} from "react";

const NoteForm = (props) => {
  // step7 adding addnewperson function

  // this component expects "addNewNote" function as a prop from app.js

//   step7 create state
  const [formNote, setFormNote] = useState({
    id: Date.now(),
    name: "",
    email: "",
    role: "",

  })
  
  // // Create state for the form

  // create function keeps track of what you type and sends it to the state
//   step 9 create handleChange function
  function handleChange(event) {
    let newData = {...formNote, [event.target.name]: event.target.value}

    setFormNote(newData)

  }
 
// console.log(formNote)

  // Create a function that submits your form to "addNewNote" function

// step 10 create handleSubmit function
  function handleSubmit(event) {
    event.preventDefault()
//   step13 attraction in props
     props.addNewNote(formNote)
  }


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text" 
        placeholder="Enter your name"
        id="name"
        name="name"
        // step8 add value each section
        value={formNote.name}
        onChange={handleChange}
       
      />
     
     <label htmlFor="Email">Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        id="email"
        name="email"
        value={formNote.email}
        onChange={handleChange}
       
      />

<label htmlFor="role">Role</label>
      <input
        type="text"
        placeholder="Enter your role"
        id="role"
        name="role"
        value={formNote.role}
        onChange={handleChange}

/>
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
