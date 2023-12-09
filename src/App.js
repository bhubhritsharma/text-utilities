import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from 'react'

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  const [myStyle, setMyStyle] = useState({
      color: '#fff',
      backgroundColor: '#212529',
      borderColor: '#fff'
  })

  const [mode, setMode] = useState('Light');

  const toggleStyle = () => {
      if(myStyle.color === '#fff'){
      setMyStyle({
          color: '#212529',
          backgroundColor: '#fff',
          borderColor: '#212529'
      });
      showAlert('Light mode has been enabled', 'success');
      setMode('Dark');
      document.body.style.backgroundColor = "#fff";
      } else {
      setMyStyle({
          color: '#fff',
          backgroundColor: '#212529',
          borderColor: '#fff'
      });
      showAlert('Dark mode has been enabled', 'success');
      setMode('Light');
      document.body.style.backgroundColor = "#212529";
      }
  }

  return (
    <>
      <Navbar title="Text Analyser" myStyle={myStyle} toggleStyle={toggleStyle} mode={mode} />
      <Alert alert={alert}/>
      {/* <Navbar/> */}
      <div className="container my-5" style={myStyle}>
        <Textform heading="Enter the text to analyse" myStyle={myStyle} />
      </div>
    </>
  );
}

export default App;
