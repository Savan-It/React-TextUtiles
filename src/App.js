import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (type, massage) => {
    setAlert({
      type: type,
      msg: massage
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundImage = "linear-gradient(to bottom right, #111827, #111827)";
    }
    else {
      setMode('light')
      document.body.style.backgroundImage = "linear-gradient(to bottom right, #ecebde, #ebc2c2)";
    }
  }

  return (
    <Router>
      <>
        <Navbar mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/About">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <TextForm heading="Enter the Text to Analyze" mode={mode} showAlert={showAlert} />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
