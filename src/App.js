import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import { data } from "./data"
import Split from "react-split"
import { nanoid } from "nanoid"
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Contact from "./components/Contact"




export default function App() {

    const [notes, setNotes] = React.useState(
        () => JSON.parse(localStorage.getItem("notes")) || []
    )


    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    )

    React.useEffect(() => {
        localStorage.setItem(`notes`, JSON.stringify(notes))
        console.log(notes);
    }, [notes])


    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your notes here!"
        }
        setNotes(prevNotes => [newNote, ...prevNotes])
        setCurrentNoteId(newNote.id)
    }

    function updateNote(text) {
        setNotes(oldNotes => {
            let newArray = [];
            for (let i = 0; i < oldNotes.length; i++) {
                const oldNote = oldNotes[i]
                if (oldNote.id === currentNoteId) {
                    newArray.unshift({ ...oldNote, body: text })
                }
                else newArray.push(oldNote);
            }
            return newArray
        })
    }

    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }

    function deleteNote(event, noteid) {
        event.stopPropagation();
        console.log(noteid);
        setNotes(oldNotes => {
            return oldNotes.filter(oldNote => oldNote.id !== noteid)
        })
    }



    return (
        <main>
            {notes.length > 0 ?
                <>
                    <NavBar />
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="contact" element={<Contact />} />
                            <Route path="Sidebar"
                                element={<Sidebar
                                    notes={notes}
                                    currentNote={findCurrentNote()}
                                    setCurrentNoteId={setCurrentNoteId}
                                    newNote={createNewNote}
                                    deleteNote={deleteNote}
                                    updateNote={updateNote}
                                />}>
                            </Route>
                        </Routes>
                    </div>
                </>
                :
                <div className="no-notes">
                    <h1>Welcome to Note-ify</h1>
                    <button
                        className="first-note"
                        onClick={createNewNote}
                    >
                        Start Noting
                    </button>
                </div>

            }
        </main >

    )
}

{/* <Route path="editor" element={<Editor
    currentNote={findCurrentNote()}
    updateNote={updateNote}
/>} /> */}

