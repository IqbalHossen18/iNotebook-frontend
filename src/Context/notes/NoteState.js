import React, { useState } from "react";
import noteContext from './NoteContext';

const NoteState = (props) => {
        //function about alert.......
        const [alert, setalert] = useState(null);
        const showalert = (message, type)=>{
            setalert({
                msg:message,
                type:type
            })
            setTimeout(()=>{
                setalert(null)
            }, 2500)
        }
    
    // const s1 = {
    //     "name": "Emon",
    //     "class": "none"
    // }
    // const [state, setstate] = useState(s1)
    // const update= () =>{
    //        setTimeout(()=>{
    //         setstate({
    //             "name": "Awlad Hossain",
    //             "class": "12th completed"
    //            })
    //        },2000)
    // } 
    const notesinitiat = []
    const [notes, setnotes] = useState(notesinitiat)
    // all notes is here
    const host = 'http://localhost:5000'
    const getnotes = async () => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUyMThiZjliMmEwODMxNGViNTA3NGE2In0sImlhdCI6MTY5NjY5NzM0M30.Y4Shemq3-GMCqKFjplEaqJZs71v-_-aiLICZQl-OOU4"
            },
        });
        const json = await response.json()
        // console.log(json)
        setnotes(json)
            
    }
  
    //add notes
    const addnote = async (title, description, tag) => {
        // console.log('adding new notes')
        const response = await fetch(`${host}/api/notes/addnotes`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUyMThiZjliMmEwODMxNGViNTA3NGE2In0sImlhdCI6MTY5NjY5NzM0M30.Y4Shemq3-GMCqKFjplEaqJZs71v-_-aiLICZQl-OOU4"
            },
            body: JSON.stringify({title, description, tag})
          });
        //todo : call api
        const notestoadd = await response.json()
        // console.log(notes)
        setnotes(notes.concat(notestoadd))
    }

    //deletenote
    const deletenote = async(id) => {
        // console.log('deleleting the notes with ' + id)
        const response = await fetch(`${host}/api/notes/deletenotes/${id}`,{
            method: "DELETE", 
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUyMThiZjliMmEwODMxNGViNTA3NGE2In0sImlhdCI6MTY5NjY5NzM0M30.Y4Shemq3-GMCqKFjplEaqJZs71v-_-aiLICZQl-OOU4"
            },
        })
        const json  = await response.json()
        console.log(json)
        //todo : call api
        const newnotes = notes.filter((note) => {
            return note._id !== id
        })
        setnotes(newnotes)
        showalert('Your note have been deleted', 'danger')
    }
    //edit notes 
    // //  const id='6526403b53ede136881bdf14'
    // const editnote = async (id, title, description, tag) => {
    //     // api calls
    //     const response = await fetch(`http://localhost:5000/api/notes/updatenotes/${id}`,{
    //         method: "PUT", 
    //         headers: {
    //             "Content-Type": "application/json",
    //             "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUyMThiZjliMmEwODMxNGViNTA3NGE2In0sImlhdCI6MTY5NjY5NzM0M30.Y4Shemq3-GMCqKFjplEaqJZs71v-_-aiLICZQl-OOU4"
    //         },
    //         body:JSON.stringify({title, description, tag})
    //     })
    //     const json = await response.json();
    //     console.log(json)
    //     // edit notes
    //     for (let index = 0; index < notes.length; index++) {
    //         const element = notes[index]
    //         if (element._id === id) {
    //             element.title = title;
    //             element.description = description;
    //             element.tag = tag;
    //         }
    //     }
    // }
    const editnote = async (id, title, description, tag) => {
        // API Call 
        const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUyMThiZjliMmEwODMxNGViNTA3NGE2In0sImlhdCI6MTY5Njc0NDYyMn0.G9fEkt-qzrm5ayL4Z3Yzokx2PooIlj3EBoI1mktfEHg"
          },
          body: JSON.stringify({title, description, tag})
        });
        const json = response.json();
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


    return (
        <>
            <noteContext.Provider value={{ notes, editnote, addnote, deletenote, getnotes, showalert, alert }}> {/*value = {{state, update}}*/}
                {props.children}
            </noteContext.Provider>
        </>
    )
}

export default NoteState;