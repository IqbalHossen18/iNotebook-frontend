import React, { useContext } from 'react'
import noteContext from '../Context/notes/NoteContext'
export const Alert = () => {
    const context = useContext(noteContext);
    const {alert, showalert} = context;
    return (
            <div className='sticky-top' style={showalert? {height:'0px'}: {height:'50px'}}>
                {alert && <div className={`alert alert-${alert.type}`} role="alert">
            {alert.msg} : {alert.type}
            </div>}
            </div>
    )
}
