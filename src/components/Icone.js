
import React, { useState } from 'react';

export default function Icone(properties) {
    function SpawnaIconePrincipal() {

        const [contadorDeCliques, setaIndiceIcone] = useState(properties.iconeAtual);
        if (contadorDeCliques == 5) {
          setaIndiceIcone(0)
        }
        return (
          <div>
            <h1 className={properties.indiceParaClasse[contadorDeCliques]}>
                {properties.geraTexto(contadorDeCliques)}
                </h1>

            <a href='#' onClick={() => setaIndiceIcone(contadorDeCliques + 1)}>
              {properties.RetornaIcone(contadorDeCliques)}
              {console.log(properties.indiceParaClasse[contadorDeCliques])}
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
