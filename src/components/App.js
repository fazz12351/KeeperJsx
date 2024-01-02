import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import { notes } from "../notes";

function displayMessage(object) {
  return <Note key={object.key} title={object.title} content={object.content} />
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(displayMessage)}
      <Footer />
    </div>
  );
}

export default App;
