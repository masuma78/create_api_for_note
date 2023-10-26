import { useContext } from 'react';
import { NoteContext } from '../contexts/Note';


const NoteForm = () => {
   const noteCtx = useContext(NoteContext);
    const createHandler = (event) => {
		event.preventDefault();
		if (!noteCtx.noteTitle) {
			return alert("Please Enter Note Title");
		}
		const newNote = {
			id: Date.now() + "",
			title: noteCtx.noteTitle,
		};

		noteCtx.setNotes([...noteCtx.notes, newNote]); //
		// notes = [...notes, newNote]
		noteCtx.setNoteTitle("");

	};
    const updateHandler = (event) => {
		event.preventDefault();

		if (!noteCtx.noteTitle.trim()) {
			return alert("Please Enter Note Title");
		}
		const updatedNotesArray = noteCtx.notes.map((note) => {
			if (note.id === noteCtx.editableNote.id) {
				
				return {
					...note,
					title: noteCtx.noteTitle,
				};

				// {id: 2, title: "note 222"}
			}

			return note; // {id: 1, title: "note 1"} // {id: 3, title: 'note 3}
		});
		// updatedNotesArray = [{id: 1, title: "note 1"}, {id: 2, title: "note 222"}, {id: 3, title: 'note 3}]

		noteCtx.setNotes(updatedNotesArray);
		noteCtx.setEditMode(false);
		noteCtx.setEditableNote(null);
		noteCtx.setNoteTitle("");
	};
  return (
    <form onSubmit={noteCtx.editMode ? updateHandler : createHandler}>
				<input
					type="text"
					value={noteCtx.noteTitle}
					onChange={(event) => noteCtx.setNoteTitle(event.target.value)}
				/>
				<button type="submit">
					{noteCtx.editMode ? "Update Note" : "Add Note"}
				</button>
			</form>
  );
};

export default NoteForm;
