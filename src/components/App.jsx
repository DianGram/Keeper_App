import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteList, setNoteList] = useState([]);

  function addNote(newNote) {
    setNoteList((prevItems) => {
      return [...prevItems, newNote];
    });
    console.log("new note list");
    console.log(noteList);
    // this adds the new note to the list of previsous notes
  }

  function DeleteNote(id) {
    setNoteList((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {noteList.map((noteObj, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteObj.title}
            content={noteObj.content}
            buttonClicked={DeleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
