import React from 'react'
import { useContext } from 'react'
import noteContext from '../Context/notes/NoteContext'
import accountImage from '../account.png'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export const Account = () => {
    const context = useContext(noteContext)
    let history = useHistory()
    const {notes, users} = context
   
    const homepage = (e)=>{
       history.push('/')
    }


  return (
    <>
    {users !== null && localStorage.getItem('token') ? <div className=" mt-3 d-flex justify-content-center">
        <div className="card text-white bg-dark mb-3" style={{ width: '25rem', height: '40rem' }}>
          <h2 style={{textAlign:'center', marginTop:'20px'}}>Your Profile Picture</h2>
          <div className="card- d-flex justify-content-center">
            <img style={{width:'200px'}} src={accountImage} alt='account' />
          </div>
         
          <div className="card-body">
            <h4>Account Details:-</h4>
            <h2><span id="colortag" >Name :</span> {users.name} </h2>
            <p className='card-text my-4'><span id="colortag" >Email Address :</span> {users.email}</p>
            <p><span id="colortag" >Signed Up :</span> {users.date} </p>
            <p><span id="colortag" >Totall Notes :</span> {notes.length}</p>
          </div>
          <button onClick={homepage} className='btn btn-primary mb-4 mx-4' role='button'>Go To Home</button>     
        </div>
       </div> : <p className='text-info mt-3'>CLICK TWICE AT PROFILE PICTURE ||  Your are not logged in..!</p>}
    </>
  )
}
