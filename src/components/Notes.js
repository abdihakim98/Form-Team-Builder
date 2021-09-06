import React from 'react'

const Notes = (props) => {

    console.log(props.notes)
    return (
        <div className="note-list">
          {/* step6 looping */}
          {/* Loop Through all the notes from props */}
          {props.notes.map((note) => (
            <div className="note">
              <h1>Name: {note.name}</h1>
              <h3>Email: {note.email}</h3>
              <h4>Role: {note.role}</h4>
             </div>            
          ))}
        </div>
      );
    };
    
    
    export default Notes;
    