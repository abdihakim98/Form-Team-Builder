import React, {useState} from 'react';

import './App.css';

// step 3 import Components

import NotesForm from "./components/NoteForm"
import Notes from './components/Notes'

// step1
import Data from "./data"


function App() {

    // step2 create State 

    const [notes, setNotes] = useState(Data)
      // step 11 create addNewNote function

      function addNewNote(waxcusub) {
    const newNote = [...notes, {...waxcusub}]

    setNotes(newNote)

  }

  return (
    <div className="App">
      <h1>Team members</h1>
{/* step 4 presentation */}
{/* then step 12 send in props addnewnote function*/}
      <NotesForm addNewNote={addNewNote} />
{/* step 5 send props */}
      <Notes notes={notes} />

 
    </div>
  );
}

export default App;

