import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import "./App.scss"
import BolhaCentral from "./components/BolhaCentral";

import audioPortaSfx from "./audio/PortaRangendoSfx.wav"
import audioArmaSfx from "./audio/EspadaSfx.mp3"
import audioDragonSfx from "./audio/DragonSfx.mp3"
import audioDeathSfx from "./audio/DeathSfx.mp3"
import audioWinSfx from "./audio/WinSfx.wav"



function App() {
 
  const tocaSom = (indice) =>{
    
    let vetorAudios = []
    let vetorAudiosSfx = [audioPortaSfx, audioArmaSfx ,audioDragonSfx ,audioDeathSfx ,audioWinSfx]

    for (let audioAtual of vetorAudiosSfx){
      vetorAudios.push(new Audio(audioAtual))
    }

    
    
      vetorAudios[indice].play()
      

  }
 
  return (
    
    <>
    
    {tocaSom(0)}
      <div className='tudo fundoFundo '>
        <BolhaCentral
        />
      </div>
      <div />
      
    </>
    
  )
}

export default App;