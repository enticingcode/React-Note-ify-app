import React from "react"
import Editor from "./Editor"


export default function Notes(props) {

    const noteElements = props.notes.map((note, index) => {

        let noteTitle = note.body.split("\n")[0];

        return (
            <div key={note.id}>
                <div

                    className={`title ${note.id === props.currentNote.id ? "selected-note" : ""
                        }`}
                    onClick={() => {
                        props.setCurrentNoteId(note.id)
                        props.setNoteTitle(noteTitle)
                    }
                    }
                >
                    <h4 className="text-snippet">{noteTitle}</h4>
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
                    <h3>Notes App</h3>
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


{/* <NavLink to={note.body.split("\n"[0])} /> */ }

