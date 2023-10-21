// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import About_Us from './components/About_Us';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
//   // Link
// } from 'react-router-dom';



function App() {
  const [mode,setMode]=useState('light');  //wheather the darkmode enable or not
 const [btnColor,setBtncolor]=useState('text-dark');

 const [alert,setAlert]=useState(null);
 
 const showAlert=(massage, type)=>{
    setAlert({
      msg:massage,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
 }

  const togglemode=() =>{

    if(mode==='light')
     {
      setMode('dark')
      setBtncolor('text-light')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been Enabled" , 'success')
      document.title="Textutils -Dark mode"
      // setInterval(()=>{
      //   document.title="textutil is amazing"
      // },2000)
      // setInterval(()=>{document.title="install textutils now"},1500)
     }
    
    else
    {
      setMode('light')
      setBtncolor('text-dark')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been Enabled" , 'success')
      document.title="Textutils -light mode"
    }
     
  }
  return (
      <>
      {/* <Router> */}
      <Navbar title="TEXTUTILES" t="About" mode={mode} togglemode={togglemode} btn={btnColor}/>
      <Alert alert={alert}/>
      {/* <Navbar/> */}
      <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the text for analyze" mode={mode}/>
        {/* <About_Us/> */}
      </div>
      
      {/* <Routes>
        <Route exact path="/About_Us" element={<About_Us/>}/> // good idea to write exact
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text for analyze" mode={mode}/>}/>
      </Routes>
      </Router> */}
      </>
  );
}

export default App;