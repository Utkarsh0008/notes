import React, { useState } from "react";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addItem(newNote) {
    setNotes((preValue) => {
      return [...preValue, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((preValue) => {
      return preValue.filter((noteItem, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div>
      <CreateArea onAdd={addItem} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default App;
