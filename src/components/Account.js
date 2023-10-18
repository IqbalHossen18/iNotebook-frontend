import React from 'react'
import { useContext } from 'react'
import noteContext from '../Context/notes/NoteContext'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export const Account = () => {
    const context = useContext(noteContext)
    let history = useHistory()
    const {notes, users} = context
   
    const homepage = (e)=>{
       history.push('/')
    }
     const oneword = (word)=>{
         let lower = word.toLowerCase()
         return lower.toUpperCase() 
     }

  return (
    <>
    {users !== null && localStorage.getItem('token') ? <div  className=" mt-5 d-flex justify-content-center">
        <div id="boxshadow" className="card text-white bg-dark mb-3" style={{ width: '25rem', height: '35rem' }}>
          <h2 style={{textAlign:'center', marginTop:'20px'}}>Your Profile</h2>
          <div  className="card- d-flex justify-content-center mt-1">
            <h2 id="profilepic" >{oneword(users.name)}</h2>
          </div>
         
          <div className="card-body">
            <h4>Account Details:-</h4>
            <h4><span id="colortag" >Name :</span> {users.name} </h4>
            <p className='card-text my-3'><span id="colortag" >Email Address :</span> {users.email}</p>
            <p><span id="colortag" >Signed Up :</span> {users.date} </p>
            <p><span id="colortag" >Totall Notes :</span> {notes.length}</p>
          </div>
          <button onClick={homepage} className='btn btn-primary mb-4 mx-4'>Go To Home</button>     
        </div>
       </div> : <p className='text-info mt-3'>CLICK TWICE AT PROFILE PICTURE ||  Your are not logged in..!</p>}
    </>
  )
}
