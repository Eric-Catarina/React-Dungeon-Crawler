
import logo from './logo.svg';

import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import "./App.scss"


function geraIcone(indice) {
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

let iconeAtual = 0

function IconePrincipal() {

  const [contadorDeCliques, setaIndiceIcone] = useState(iconeAtual);
  if (contadorDeCliques == 5 ){
    setaIndiceIcone(0)
  }
  return (
    <div>

      <a href='#' onClick={() => setaIndiceIcone(contadorDeCliques + 1)}>
        {geraIcone(contadorDeCliques)}
      </a>
    </div>
  );
}

function App() {
  return (
    <>
      <div className='tudo pt-5 fundoFundo '>
        <div className='shadow-lg border  border-5 border-dark rounded-circle container text-center containerCentral fundoMeio d-flex align-items-center justify-content-center'>
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