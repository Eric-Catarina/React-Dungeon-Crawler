import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import "./App.scss"
import Icone from "./components/Icone";

const indiceParaClasse = ["porta", "arma", "dragao", "caveira", "replay"]
  





function RetornaIcone(indice) {
  switch (indice) {
    case 0:
      return <h1><i class="fa-solid fa-dungeon fa-10x porta"></i></h1>;
    case 1:
      return <h1><i class="fa-solid fa-khanda fa-10x arma"></i></h1>;
    case 2:
      return <h1><i class="fa-solid fa-dragon fa-10x dragao"></i></h1>;
    case 3:
      return <h1><i class="fa-solid fa-skull-crossbones fa-10x caveira"></i></h1>;
    case 4:
      return <h1><i class="fa-solid fa-arrow-rotate-left fa-10x replay"></i></h1>;

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



function App() {
  return (
    <>
      <div className='tudo fundoFundo '>
        <div className='glow shadow-lg border  border-5 border-dark rounded-circle container text-center containerCentral fundoMeio d-flex align-items-center justify-content-center'>
          <Icone
          iconeAtual = {iconeAtual}
          indiceParaClasse = {indiceParaClasse}
          geraTexto = {geraTexto}
          RetornaIcone = {RetornaIcone}
          />
        </div>
      </div>

    </>
  )
}

export default App;