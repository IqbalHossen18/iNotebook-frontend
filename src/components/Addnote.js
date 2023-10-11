import React from 'react'
import { useContext, useState } from 'react'
import noteContext from '../Context/notes/NoteContext'

export const Addnote = () => {
    const context = useContext(noteContext)
    const { addnote , showalert } = context;
    const [note, setnote] = useState({ title: '', description: '', tag: 'default' })
    const onChange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }
    const handleClick = (e) => {
        e.preventDefault()
            addnote(note.title, note.description, note.tag)
            showalert("Your note have been added" , "success")
        
    }
    return (
        <>
            <div className="container my-3">
                <h1>Add Note</h1>
                <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" placeholder='Title must be given at least three charecter' aria-describedby="emailHelp" onChange={onChange} /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea  className="form-control" id="description" placeholder="Description must be given at least 8 letter" name="description" onChange={onChange}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" placeholder="Enter your notes keyword(Optional)" name="tag" onChange={onChange} />
                </div>
               
                <button type="submit" disabled={note.title.length < 3 ||  note.description.length <9} className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>

            </div>
        </>
    )
}