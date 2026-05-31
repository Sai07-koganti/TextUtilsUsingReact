import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
// import About from './components/About';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)},1500)
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode';
     
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
   <>
     {/* <Router>
  <Navbar title = "TextUtils" abouText = "About" mode ={mode} toggleMode={toggleMode}/>
  <Alert  alert={alert}/>

  <div className="container">
      <Routes>
        <Route path="/" element={<TextForm heading = "Enter the Text to analyze below"  mode={mode}/> }/>    
        <Route path="/about" element ={<About/>}/>
      </Routes> 
  </div>
 </Router> */}
 <Navbar title = "TextUtils" abouText = "About" mode ={mode} toggleMode={toggleMode}/>
  <Alert  alert={alert}/>

  <div className="container">
     
     <TextForm heading = "Enter the Text to analyze below" show ={showAlert}  mode={mode}/>    

  </div>
   </>
  );
}

export default App;
