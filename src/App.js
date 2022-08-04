import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import "./App.scss"
import BolhaCentral from "./components/BolhaCentral";

import audioPortaSfx from "./audio/creaking-door-2.wav"

function App() {
  const tocaSom = () =>{
    const audioPorta = new Audio(audioPortaSfx)
   
    audioPorta.play();
  }
 
  return (
    
    <>
    {tocaSom()}
      <div className='tudo fundoFundo '>
        <BolhaCentral
        />
      </div>
      <div />
      
    </>
    
  )
}

export default App;