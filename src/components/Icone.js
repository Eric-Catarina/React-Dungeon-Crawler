import React, { useState } from 'react';
import audioPortaSfx from "../audio/PortaRangendoSfx.wav"
import audioArmaSfx from "../audio/EspadaSfx.mp3"
import audioDragonSfx from "../audio/DragonSfx.mp3"
import audioDeathSfx from "../audio/DeathSfx.mp3"
import audioWinSfx from "../audio/WinSfx.wav"

export default function Icone(properties) {
  const indiceParaClasse = ["porta", "arma", "dragao", "caveira", "replay"]


  function RetornaIcone(indice) {
    switch (indice) {
      case 0:
        return <h1><i className="fa-solid fa-dungeon fa-10x porta"></i></h1>;
      case 1:
        return <h1><i className="fa-solid fa-khanda fa-10x arma"></i></h1>;
      case 2:
        return <h1><i className="fa-solid fa-dragon fa-10x dragao"></i></h1>;
      case 3:
        return <h1><i className="fa-solid fa-skull-crossbones fa-10x caveira"></i></h1>;
      case 4:
        return <h1><i className="fa-solid fa-arrow-rotate-left fa-10x replay"></i></h1>;

    }
  }
  


  function geraTexto(indice) {
    switch (indice) {
      case 0:
        return "Entre no Calabouço"
      case 1:
        return "Pegue a Arma ";
      case 2:
        return "Mate o Dragão";
      case 3:
        return "Dragão Assassinado !";
      case 4:
        return "Jogar de Novo";

    }
  }

  let iconeAtual = 0

  function SpawnaIconePrincipal() {
    const [contadorDeCliques, setaIndiceIcone] = useState(iconeAtual);
    if (contadorDeCliques == 5) {
      setaIndiceIcone(0)
    }
    const tocaSom = (contadorDeCliques) => {

      let vetorAudios = []
      let vetorAudiosSfx = [audioPortaSfx, audioArmaSfx, audioDragonSfx, audioDeathSfx, audioWinSfx]

      for (let audioAtual of vetorAudiosSfx) {
        vetorAudios.push(new Audio(audioAtual))
      }
      vetorAudios[contadorDeCliques + 1].play()
      
    }

    function TocaSomETrocaIcone(contadorDeCliques) {
      setaIndiceIcone(contadorDeCliques + 1)

      tocaSom(contadorDeCliques)


    }
    function TocaSomPortaSeIndiceZero(contadorDeCliques){
      if (contadorDeCliques ==0 ){
        let audioPorta = new Audio(audioPortaSfx)
        audioPorta.play()
      }
    }
    

    return (
      <div>

        <h1 className={indiceParaClasse[contadorDeCliques]}>
          {geraTexto(contadorDeCliques)}
          {TocaSomPortaSeIndiceZero(contadorDeCliques)}
        </h1>
        
        <a href='#' onClick={() => TocaSomETrocaIcone(contadorDeCliques)}>
          {RetornaIcone(contadorDeCliques)}
          {console.log(contadorDeCliques)}
        </a>
      </div>
    );
  }

  return (
    <div className='row'>
      <div className='col'>
        {SpawnaIconePrincipal()}
      </div>
    </div>
  )
}

