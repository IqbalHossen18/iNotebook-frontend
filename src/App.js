

import './App.css';
import { About } from './components/About';
import { Account } from './components/Account';
import { Alert } from './components/Alert';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { Signup } from './components/Signup';
import NoteState from './Context/notes/NoteState'
import {
  Switch,
  Route} from 'react-router-dom';

export const App=()=>{

  return (
    <>
      <NoteState>
        <Navbar />
        <Alert />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/img">
              {/* {users.map((user)=>{
                return <Account key={user._id} user={user} />
              })} */}
              <Account/>
            </Route>
          </Switch>
        </div>
      </NoteState>

    </>
  )
}

export default App