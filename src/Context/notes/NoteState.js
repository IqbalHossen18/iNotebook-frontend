import React, { useState , useEffect} from "react";
import noteContext from './NoteContext';

const NoteState = (props) => {
    //function about alert.......
    const [alert, setalert] = useState(null);
    const showalert = (message, type) => {
        setalert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setalert(null)
        }, 2500)
    }


    const notesInitial = []// Default value when there's no data
    const [users, setusers] = useState(null)
    const [notes, setnotes] = useState(notesInitial);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const host = 'http://localhost:5000';

    const getnotes = async () => {
        try {
            const response = await fetch(`${host}/api/notes/fetchallnotes`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem('token')
                },
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch data. Status: ${response.status}`);
            }

            const json = await response.json();
            setnotes(json);
            setLoading(false);
            setError(null);
        } catch (error) {
            console.error(error);
            setnotes(notesInitial); // Set notes to the default value
            setLoading(false);
            setError(error.message); // Set the error message
        }
    };


    //add notes
    const addnote = async (title, description, tag) => {
        // console.log('adding new notes')
        const response = await fetch(`${host}/api/notes/addnotes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        });
        //todo : call api
        const json = await response.json()
        // console.log(notes)
        setnotes(notes.concat(json))
        showalert('Your note have been added', 'success')
    }

    //deletenote
    const deletenote = async (id) => {
        // console.log('deleleting the notes with ' + id)
        const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
        })
        const json = await response.json()
        console.log(json)
        //todo : call api
        const newnotes = notes.filter((note) => {
            return note._id !== id
        })
        setnotes(newnotes)
        showalert('Your note have been deleted', 'info')
    }

    const editnote = async (id, title, description, tag) => {
        // API Call 
        const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();
        console.log(json)
        const newnotes = JSON.parse(JSON.stringify(notes));

        // Logic to edit in client
        for (let index = 0; index < newnotes.length; index++) {
            const element = newnotes[index];
            if (element._id === id) {
                newnotes[index].title = title;
                newnotes[index].description = description;
                newnotes[index].tag = tag;
                break;
            }
        }
        setnotes(newnotes)
    }





    const userinfo = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/getuser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token'),
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }

            const json = await response.json();
            setusers(json)
            // console.log(users)

        } catch (error) {
            console.error(error);

        }
    };
    const gotohome = (e)=>{
        userinfo()
        // console.log(users)
    }

    return (
        <>
            <noteContext.Provider value={{ gotohome, notes, editnote, users,  addnote, userinfo, deletenote, getnotes, showalert, alert }}> {/*value = {{state, update}}*/}
                {props.children}
            </noteContext.Provider>
        </>
    )
}

export default NoteState;