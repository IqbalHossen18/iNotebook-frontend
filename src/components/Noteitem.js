import React from 'react'
import { useContext} from 'react';
import noteContext from '../Context/notes/NoteContext';
export const Noteitem = (props) => {
    const {note, updatenote} = props;
    const context = useContext(noteContext)
    const {deletenote} = context;

    return (
        <>
            <div className=" card my-2 mx-2 border-warning bg-dark">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                        <h5 className="card-title text-secondary">{note.title}</h5>
                             <i className="fa-solid text-danger fa-trash-can mx-3" onClick={()=>{deletenote(note._id)}}></i>
                             <i className="fa-solid text-info fa-pen-to-square mx-1" onClick={()=>{updatenote(note)}} ></i>
                        </div>
                        <p  className="card-text text-white">{note.description}</p>
                        <p className='card-text text-warning'>{note.tag}</p>
                    </div>
            </div>
        </>
    )
}
