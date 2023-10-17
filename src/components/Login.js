import React, {useContext, useState} from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import noteContext from '../Context/notes/NoteContext'

export const Login = () => {
  const context = useContext(noteContext)
  const {showalert} = context;
  const [credintials, setcredintials] = useState({email:'', password:''})
  let history = useHistory()
  const {email, password} = credintials;


  const handlesubmit = async(e)=>{
    e.preventDefault()
    const response =  await fetch('http://localhost:5000/api/auth/login', {
      method:'POST',
      headers:{
        'Content-Type': "application/json"
      },
      body:JSON.stringify({email, password})
    })
    const json = await response.json()
    if(json.success){
      localStorage.setItem('token', json.token)
      // console.log(json.token)
      history.push('/')
      showalert('Logged In', 'success')
    }else{
      showalert('Invalid credintials', 'danger')
    }
    

  }


  const onchange = (e)=>{
    e.preventDefault()
    setcredintials({...credintials, [e.target.name] : e.target.value})
  }
  return (
    <>
      <form onSubmit={handlesubmit} className='container mt-5'>
      <h3>Enter your email & password bellow!</h3>
        <div className="form-group my-2">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" name="email"  onChange={onchange} aria-describedby="emailHelp" required/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group my-2">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" name="password"  onChange={onchange}  required/>
        </div>
        <button type="submit" className="btn btn-primary my-2">Submit</button>
      </form>
    </>
  )
}
