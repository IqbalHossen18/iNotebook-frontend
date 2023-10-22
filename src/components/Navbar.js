import React, { useContext } from 'react'
import { Link, useLocation } from "react-router-dom";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import noteContext from '../Context/notes/NoteContext';
export const Navbar = () => {
    const context = useContext(noteContext)
    const { showalert, gotohome} = context;

    let location = useLocation()
    let history = useHistory()
    // useEffect(() => {
    // //   console.log(location.pathname)
    // }, [location]);

    const handellogout = () => {
        localStorage.removeItem('token');
        history.push('/login')
        showalert('Logged Out', 'success')
    }
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/homepage">iNotebook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>
                    </ul>
                     <div onClick={gotohome} >
                     <Link  className="navbar-brand mr-2" to="/img" role="button">Your Profile</Link>
                     </div>
                    {!localStorage.getItem('token') ? <form className="d-flex">
                        <Link className="btn btn-info mx-1 my-2" to="/login" role="button">Login</Link>
                        <Link className="btn btn-info mx-1 my-2" to="/signup" role="button">Signup</Link>
                    </form> : <button onClick={handellogout} className='btn btn-primary my-2'>Logout</button>}
                </div>
            </div>
        </nav>
    )
}
