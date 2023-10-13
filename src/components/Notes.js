
import React, { useContext, useEffect, useState } from 'react'
import noteContext from '../Context/notes/NoteContext'
import { Noteitem } from './Noteitem'
import { Addnote } from './Addnote'
import { useRef } from 'react'

export const Notes = () => {

      const [screenWidth, setScreenWidth] = useState(window.innerWidth);
      useEffect(() => {
        function handleResize() {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
      const columnwise = screenWidth < 1250;
    

    const context = useContext(noteContext)
    const { notes, getnotes, editnote} = context;

    const [note, setnote] = useState({ id:'',  etitle: '', edescription: '', etag: '' })
    useEffect(() => {
        getnotes()
        // eslint-disable-next-line
    }, [])
    const ref = useRef(null)
    const refclose = useRef(null)
    const updatenote = (currentNote) => {
        ref.current.click()
        setnote({ id: currentNote._id,  etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    }
    const handleClick = () => {
        // console.log("Updating the note...", note)
        editnote(note.id, note.etitle, note.edescription, note.etag)
        refclose.current.click()
    }

    const Onchange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }
    const notesnumber = notes.length;
    return (
        <>
            <Addnote/>
            <button ref={ref} style={{display:' none'}} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content p-3">
                        <form className='my-2'>
                            <h3>Edit Note</h3>
                            <div className="form-group my-2">
                                <label htmlFor="etitle">Title</label>
                                <input type="text" className="form-control" id="etitle" name="etitle"  value={note.etitle} aria-describedby="emailHelp" onChange={Onchange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="edescription">Description</label>
                                <textarea className="form-control" id="edescription" name="edescription" value={note.edescription} rows="5" onChange={Onchange}></textarea>
                            </div>
                            <div className="form-group my-2">
                                <label htmlFor="etag">Tag</label>
                                <input type="text" className="form-control" id="etag" name="etag" value={note.etag} aria-describedby="emailHelp" onChange={Onchange} />
                            </div>
                        </form>
                        <div className="modal-footer">
                            <button ref={refclose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container"><h1>Your Note</h1>
              {notes.length > 0 ?`You have ${notesnumber} note`:''}
            </div>
            <div  style={columnwise ? {display:'flex', flexDirection:'column' } : {}} className={` ${notes.length < 6 ? 'flexrow':'flexcolumn'} container my-2 d-flex justify-content-center"`}>
                {notes.length === 0 && "You don't have notes to dispaly"}
                {notes.map((note) => {
                    return <Noteitem key={note._id} updatenote={updatenote} note={note} />
                })}
            </div>
        </>
    )
}
