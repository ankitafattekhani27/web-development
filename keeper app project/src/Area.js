import React, { useState } from "react";
import "./styles1.css";

function Area({ onAdd }) {
  // Destructure onAdd from props
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    onAdd(note); // Call onAdd prop
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <div className="area">
      <form className=" area-form">
        <input
          className="area-input"
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          className="area-textarea"
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        ></textarea>
        <button className="area-button" onClick={submitNote}>
          Add
        </button>
      </form>
    </div>
  );
}

export default Area;
