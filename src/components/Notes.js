import React, { memo } from "react"
import Editor from "./Editor"

export default function Notes(props) {

    const noteElements = props.notes.map((note, index) => {

        let noteTitle = note.body.split("\n")[0];
        let noteDescription = note.body.split("\n")[1] || "";

        function truncateString(str) {
            if (str.length > 10) {
                return str.substring(0, 10) + "...";
            }
            else return str
        }

        return (
            <div key={note.id}>
                <div
                    className={`title ${note.id === props.currentNote.id ? "selected-note" : ""
                        }`}
                    onClick={() => {
                        props.setCurrentNoteId(note.id)
                        props.updateNoteTitle(noteTitle)
                    }
                    }
                >   <div className="note--preview">
                        <h4 className="text-snippet" >{truncateString(noteTitle)}</h4>
                        <p className="description">{truncateString(noteDescription)}</p>
                        <p className="noteDate">{note.timeStamp}</p>

                    </div>
                    <button
                        className="delete-btn"
                        // Your onClick event handler here
                        onClick={(event) => props.deleteNote(event, note.id)}
                    >
                        <i className="gg-trash trash-icon"></i>
                    </button>
                </div>
            </div >

        )
    }
    )

    return (
        <>
            <section className="pane sidebar">
                <div className="sidebar--header">
                    <h3>Notes</h3>
                    <button className="new-note" onClick={props.newNote}>+</button>
                </div>
                {noteElements}
            </section>
            <Editor
                currentNote={props.currentNote}
                updateNote={props.updateNote}
            />
        </>
    )
}



