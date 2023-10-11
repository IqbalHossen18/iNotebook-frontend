import React from 'react'
import { useContext } from 'react';
import noteContext from '../Context/notes/NoteContext';

export const Noteitem = (props) => {
    const {note, updatenote} = props;
    const context = useContext(noteContext)
    const {deletenote} = context;
    return (
        <>
            <div className="col-md-3 card my-2 mx-2">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                             <i className="fa-solid fa-trash-can mx-4" onClick={()=>{deletenote(note._id)}}></i>
                             <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updatenote(note)}} ></i>
                        </div>
                        <p className="card-text">{note.description}</p>
                        <p className='card-text'>{note.tag}</p>
                    </div>
            </div>
        </>
    )
}
