import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import About from "./components/About";
import Footer from "./components/Footer";
import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const [myStyle, setMyStyle] = useState({
      color: '#212529',
      backgroundColor: '#fff',
      borderColor: '#212529'
  })
  
  const removeBodyClasses = () => {
    document.body.classList.remove("theme-maroon", "theme-orange", "theme-yellow", "theme-blue", "theme-black");
  }

  // const [mode, setMode] = useState('Light');

  const toggleStyle = (cls) => {
      removeBodyClasses()
      document.body.classList.add('theme-'+cls);
      if(document.body.classList.contains('theme-maroon')){
      setMyStyle({
          color: '#fff',
          backgroundColor: '#851e3e',
          borderColor: '#fff'
      });
      showAlert('Maroon theme has been enabled.', 'success');
      document.body.style.backgroundColor = "#fff";
    } else if(document.body.classList.contains('theme-orange')) {
      setMyStyle({
        color: '#212529',
        backgroundColor: '#f37736',
        borderColor: '#212529'
      });
      showAlert('Orange theme has been enabled.', 'success');
    } else if(document.body.classList.contains('theme-yellow')) {
      setMyStyle({
        color: '#212529',
        backgroundColor: '#fdf498',
        borderColor: '#212529'
      });
      showAlert('Yellow theme has been enabled.', 'success');
    } else if(document.body.classList.contains('theme-blue')) {
      setMyStyle({
        color: '#fff',
        backgroundColor: '#0392cf',
        borderColor: '#fff'
      });
      showAlert('Blue theme has been enabled.', 'success');
    } else if(document.body.classList.contains('theme-black')) {
      setMyStyle({
        color: '#fff',
        backgroundColor: '#212529',
        borderColor: '#fff'
      });
      showAlert('Black theme has been enabled.', 'success');
    } else {
      setMyStyle({
        color: '#212529',
        backgroundColor: '#fff',
        borderColor: '#212529'
      });
      showAlert('Default theme has been enabled.', 'success');
    }
  }

  return (
      <>
        <Navbar title="Text Utilities" myStyle={myStyle} toggleStyle={toggleStyle} />
        <Alert alert={alert}/>
        {/* <Navbar/> */}
        {/* <BrowserRouter> */}
          <div className="container my-5" style={myStyle}>
            {/* <Routes>
              <Route exact path="/" element={<Textform heading="Enter the text to analyse" myStyle={myStyle} />} />
              <Route exact path="/about" element={<About/>} />
            </Routes> */}
            <Textform heading="Enter the text to analyse" myStyle={myStyle} showAlert={showAlert} />
          </div>
          <Footer title="Text Utilities" myStyle={myStyle} />
        {/* </BrowserRouter> */}
      </>
  );
}

export default App;
