
import React, {useContext, useState} from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import noteContext from '../Context/notes/NoteContext';

export const Signup = () => {
  const context = useContext(noteContext)
  const {showalert} = context;

  const [credintials, setcredintials] = useState({name:'', email:'' , password:'' , cpassword:''})

  const history = useHistory()

  const handlesubmit = async(e)=>{
    e.preventDefault()
    
    const {name , email, password , cpassword} = credintials;
    if(password !== cpassword){
      showalert('password does not matched', 'warning')
      return
    }

      const response = await fetch('http://localhost:5000/api/auth/createuser', {
        method:'POST', 
        headers:{
          'Content-Type': "application/json"
        },
        body:JSON.stringify({name, email, password , cpassword})
      })
      const json = await response.json()
        // console.log(json)
       if(json.success){
        localStorage.setItem('token', json.token)
     
        history.push('/')
        showalert('Sign In','success')
       }else{
        showalert('Invalid credintails','info')
       }
  

  
  }



  const onchange=(e)=>{
    e.preventDefault()
    setcredintials({...credintials, [e.target.name] : e.target.value})
  }


  return (
    <>
    <form onSubmit={handlesubmit} className='container mt-5'>
      <h3>Enter your email & password bellow!</h3>
      <div className="form-group my-2">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" name="name"   onChange={onchange}  required/>
        </div>
        <div className="form-group my-2">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" name="email"   onChange={onchange} aria-describedby="emailHelp" required/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group my-2">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" name="password"   onChange={onchange}  required/>
        </div>
        <div className="form-group my-2">
          <label htmlFor="cpassword">Confirm Password</label>
          <input type="password" className="form-control" id="cpassword" name="cpassword"  onChange={onchange}  required/>
        </div>
        <button type="submit" className="btn btn-primary my-2">Submit</button>
      </form>
    </>
  )
}
