import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import{
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// }from 'react-router-dom';

function App(props) {
  const [mode, setMode]= useState('light'); //whether dark mode is enabled or not
  const [alert,setAlert]= useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const toggleMode= ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtils - Dark Mode';

      //   TO CHANGE TITLE DYNAMICALLY ==>
      // setInterval(()=>{
      //   document.title='TextUtils is Amazing';
      // },2000);
      // setInterval(()=>{
      //   document.title='Install TextUtils Now';
      // },1500);

    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled","success");
      document.title='TextUtils - Light Mode';
    }
    
  }
  return ( 
   <>
     {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
   {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact  path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
          </Routes> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
    </div>
    {/* </Router> */}
   </>
  );
}

export default App;
