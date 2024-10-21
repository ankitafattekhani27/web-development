import React, { useState } from "react";
import "./styles1.css";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Area from "./Area";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <Area onAdd={addNote} />
      {notes.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          OnDelete={deleteNote} // Ensure this matches the prop name used in Note component
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
