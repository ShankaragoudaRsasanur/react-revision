import { useState } from "react";
import Navbar from "./Components/Navbar";

function App() {
  const [note, setNote] = useState("");

  function addNote(event) {
    event.preventDefault();

    alert(note);
  }

  return (
    <div>
      <Navbar
        title="📝 My Notes App"
        username="Shankaragouda"
      />

      <form onSubmit={addNote}>
        <input
          type="text"
          placeholder="Write your note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <button type="submit">
          Add Note
        </button>
      </form>
    </div>
  );
}

export default App;