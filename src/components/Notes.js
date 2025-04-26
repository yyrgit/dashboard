import React, { useState } from "react";

export default function Notes() {
  const [note, setNote] = useState("");
  const [notesList, setNotesList] = useState([]);

  // Function to add a new note
  const handleSave = () => {
    if (note.trim() !== "") {
      setNotesList([...notesList, note]); // Add note to the list
      setNote(""); // Clear input field
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>My Notes</h2>
      <textarea
        rows="5"
        cols="50"
        placeholder="Write your note here..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      ></textarea>
      <button
        onClick={handleSave}
        style={{
          padding: "10px 15px",
          background: "blue",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Save Note
      </button>

      {/* Display saved notes as cards */}
      <div style={{ marginTop: "20px" }}>
        {notesList.map((savedNote, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              margin: "10px 0",
              background: "#f9f9f9",
            }}
          >
            {savedNote}
          </div>
        ))}
      </div>
    </div>
  );
}
