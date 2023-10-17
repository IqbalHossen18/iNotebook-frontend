import React, { useContext } from 'react'
import noteContext from '../Context/notes/NoteContext'
export const Alert = () => {
  const context = useContext(noteContext);
  const { alert, showalert } = context;
  const capital = (word)=>{
    if(word === 'danger'){
      word = 'error'
    }
    const lower = word.toLowerCase()
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    <div className='sticky-top' style={showalert ? { height: '0px' } : { height: '50px' }}>
      {alert && <div className={`alert alert-${alert.type}`} role="alert">
        {alert.msg} : {capital(alert.type)}
      </div>}
    </div>
  )
}
