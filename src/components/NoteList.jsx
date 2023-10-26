import React from 'react'
import { useContext } from 'react';
import { NoteContext } from '../contexts/Note';

const NoteList = () => {
    const noteCtx = useContext(NoteContext);
    const removeHandler = (noteId) => {
		const newNotes = noteCtx.notes.filter((note) => note.id !== noteId);
	

		noteCtx.setNotes(newNotes);

	};
    const editHandler = (note) => {
		noteCtx.setEditMode(true);
		noteCtx.setNoteTitle(note.title);
		noteCtx.setEditableNote(note);
	};

  return (
    <ul className="note-list">
    {noteCtx.notes.map((note) => (
        <li key={note.id}>
            <span>{note.title}</span>
            <button onClick={() => editHandler(note)}>Edit</button>
            <button onClick={() => removeHandler(note.id)}>
                Remove
            </button>
        </li>
    ))}
</ul>
  )
};

export default NoteList;
