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
    <div className="p-5">
      <Navbar
        title="📝 My Notes App"
        username="Shankaragouda"
      />

      <form onSubmit={addNote} className="mt-4">
        <input
          type="text"
          placeholder="Write your note..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="border border-gray-400 p-2 rounded w-80"
        />

        <br />
        <br />

        {!note && <Button />}

        {note && (
          <>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add Note
            </button>

            <h2 className="text-2xl font-bold mt-4">
              {note}
            </h2>

            <p className="mt-2">
              Total Characters: {note.length}
            </p>

            {note.length < 10 ? (
              <p className="text-red-500">
                ⚠️ Write a longer note.
              </p>
            ) : (
              <p className="text-green-500">
                ✅ Good Note!
              </p>
            )}
          </>
        )}

        {!note && (
          <h2 className="mt-4 text-gray-600">
            📄 No Notes Available
          </h2>
        )}
      </form>
    </div>
  );
}
<h1 className="bg-red-500 text-white text-4xl p-4 rounded">
  Tailwind Working 🚀
</h1>

export default App;