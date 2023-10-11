
import './App.css';
import { About } from './components/About';
import { Alert } from './components/Alert';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import NoteState from './Context/notes/NoteState'
import {
  Switch,
  Route} from 'react-router-dom';

function App() {
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
          </Switch>
        </div>
      </NoteState>

    </>
  )
}

export default App