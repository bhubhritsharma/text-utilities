import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from 'react'

function App() {
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
      setMode('Dark');
      document.body.style.backgroundColor = "#fff";
      } else {
      setMyStyle({
          color: '#fff',
          backgroundColor: '#212529',
          borderColor: '#fff'
      });
      setMode('Light');
      document.body.style.backgroundColor = "#212529";
      }
  }
  return (
    <>
      <Navbar title="Text Analyser" myStyle={myStyle} toggleStyle={toggleStyle} mode={mode} />
      {/* <Navbar/> */}
      <div className="container my-5" style={myStyle}>
        <Textform heading="Enter the text to analyse" myStyle={myStyle} />
      </div>
    </>
  );
}

export default App;
