import React from "react";
import "./styles1.css";
function Note(props) {
  function handleClick() {
    props.OnDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button className="note button" onClick={handleClick}>
        Delete
      </button>
    </div>
  );
}

export default Note;
