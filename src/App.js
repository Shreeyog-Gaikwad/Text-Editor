import { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import TextArea from "./components/TextArea"
//import About from "./components/About"
import Alert from "./components/Alert"
//import {
//  BrowserRouter as Router,
//  Routes,
//  Route
//} from "react-router-dom";


function App() {
  
  const [alert,setAlert] = useState(null)  
  
  const showAlert = (message,type) =>{
    setAlert({
        msg : message,
        type : type
      })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
    }
    
  const [mode,setmode] =  useState('dark');
  
  const togglemode = () => {
    if(mode === 'dark')
    {
      setmode('light');
      document.body.style.backgroundColor = "#1e1e1e"
      showAlert("Dark Mode has been Enabled.", "success")
    }
    else
    {
      setmode('dark');
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode has been Enabled.", "success")
    }
  }

  return (
    <>
    {/*<Router>*/}
      <Navbar title="Text Editor" aboutText="About" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
      <div className='container my-5'>
      <TextArea showAlert={showAlert} mode={mode}/>
      {/*<Routes>
            <Route exact path="/" element={}/>
            <Route exact path="/about" element={<About/>}/>
          </Routes>*/}
      </div>
    {/*</Router>*/}
    </>
  );
}

export default App;
