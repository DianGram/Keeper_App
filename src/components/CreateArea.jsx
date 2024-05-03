import React, { useState } from "react";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });

  function NoteChanged(event) {
    const { name, value } = event.target;

    setNewNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    console.log("submitting note");
    console.log(newNote);
    props.addNote(newNote);
    setNewNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={NoteChanged}
          name="title"
          placeholder="Title"
          value={newNote.title}
        />
        <textarea
          onChange={NoteChanged}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={newNote.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
