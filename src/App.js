
import logo from './logo.svg';

import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import "./App.scss"


function geraIcone(indice) {
  switch (indice) {
    case 0:
      return <h1><i class="fa-solid fa-dungeon fa-10x porta"></i></h1>;
    case 1:
      return <h1><i class="fa-solid fa-khanda fa-10x text-warning"></i></h1>;
    case 2:
      return <h1><i class="fa-solid fa-dragon fa-10x text-danger"></i></h1>;
    case 3:
      return <h1><i class="fa-solid fa-skull-crossbones fa-10x text-light"></i></h1>;
  }
}

let iconeAtual = 0

function IconePrincipal() {

  const [contadorDeCliques, setaIndiceIcone] = useState(iconeAtual);

  return (
    <div>

<a href='#' onClick={() => setaIndiceIcone(contadorDeCliques + 1)}>
{geraIcone(contadorDeCliques)}
              </a>
      
      Voce clicou {contadorDeCliques} vezes

    </div>
  );
}

function App() {
  return (
    <>
      <div className='tudo pt-5 bg-secondary bg-gradient '>
        <div className='shadow-lg border  border-5 border-dark rounded-circle container text-center containerCentral bg-dark bg-gradient d-flex align-items-center justify-content-center'>
          <div className='row'>
            <div className='col'>
              {IconePrincipal()}
             

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App;