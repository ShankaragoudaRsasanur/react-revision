import { useState } from "react";
import Navbar from "./Components/Navbar";
import Button from "./Components/Button";

function App() {
  const [note, setNote] = useState("");

  function addNote(e) {
    e.preventDefault();

    if (note === "") {
      alert("Please write a note first!");
    } else {
      alert("Note Added Successfully!");
    }
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
          placeholder="Write your note..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <br /><br />

        {!note && <Button />}

        {note && (
          <>
            <button type="submit">add Note</button>

            <h2>{note}</h2>

            <p>Total Characters: {note.length}</p>

            {note.length < 10 ? (
              <p>⚠️ Write a longer note.</p>
            ) : (
              <p>✅ Good Note!</p>
            )}
          </>
        )}

        {!note && <h2>📄 No Notes Available</h2>}
      </form>
    </div>
  );
}

export default App;