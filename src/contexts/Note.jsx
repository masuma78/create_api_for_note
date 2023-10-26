import { useState, createContext } from 'react';

export const NoteContext = createContext();

const NoteProvider = ({ children }) => {
    const [noteTitle, setNoteTitle] = useState("");
	const [notes, setNotes] = useState([]);
	const [editMode, setEditMode] = useState(false);
	const [editableNote, setEditableNote] = useState(null);
    const contextValue = {
        noteTitle,
        setNoteTitle,
        notes,
        setNotes,
        editMode,
        setEditMode,
        editableNote,
        setEditableNote,
    };
    return (
        <NoteContext.Provider value={contextValue}>
            {children}
        </NoteContext.Provider>

    )
}


export default NoteProvider