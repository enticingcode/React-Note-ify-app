import React from "react"
import Notes from "./components/Notes"
import { nanoid } from "nanoid"
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Contact from "./components/Contact"
import "./App.css"
import { useNavigate, Navigate } from "react-router-dom"
import { SignIn } from "./components/SignIn"
import NoMatch from "./components/NoMatch"
import { SignUp } from "./components/SignUp"

export default function App() {

    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const date = new Date().toLocaleString([], { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });

    const navigate = useNavigate();


    const [notes, setNotes] = React.useState(
        () => JSON.parse(localStorage.getItem("notes")) || []
    )


    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    )

    const [noteTitle, setNoteTitle] = React.useState("")

    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your notes here!",
            timeStamp: date,
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
                    newArray.unshift({ ...oldNote, body: text, timeStamp: date })
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



    React.useEffect(() => {
        localStorage.setItem(`notes`, JSON.stringify(notes))
        // setNoteTitle(findCurrentNote().body)
        // navigate(`notes/${noteTitle}`)
    }, [notes, currentNoteId])

    React.useEffect(() => {
        isLoggedIn && navigate("home")
        console.log(isLoggedIn)
    }, [isLoggedIn]);


    return (
        <main>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="home" element={<Home />} />
                <Route path="notes/*"
                    element={<Notes
                        notes={notes}
                        currentNote={findCurrentNote()}
                        setCurrentNoteId={setCurrentNoteId}
                        newNote={createNewNote}
                        deleteNote={deleteNote}
                        updateNote={updateNote}
                        setNoteTitle={setNoteTitle}
                    />}>
                </Route>

                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NoMatch />} />

            </Routes>

        </main >

    )
}


//     <>
//         <NavBar
//         />
//         <div className="content">
//             <Routes>
//                 <Route path="/home" element={<Home />} />
//                 <Route path="/home" element={<Contact />} />
//                 <Route path="/notes"
//                     element={<Notes
//                         notes={notes}
//                         currentNote={findCurrentNote()}
//                         setCurrentNoteId={setCurrentNoteId}
//                         newNote={createNewNote}
//                         deleteNote={deleteNote}
//                         updateNote={updateNote}
//                         setNoteTitle={setNoteTitle}
//                     />} />
//                     <Route path=":id" element={<Notes />} />
//                 </Route>



//             </Routes>

//         </div>

//     </>
//    