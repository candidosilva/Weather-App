import React, { useState } from 'react';
import './App.css';

import Historico from './components/Historico';
import UltimoRegistro from './components/UltimoRegistro';

function App() {

  const [cidade, setCidade] = useState('Belo Horizonte');

  const mudarCidade = (c) => {
    setCidade(c);
  }

    return (
      <>
      
      <div className="botao-area">
        <h2>Selecione a Cidade</h2>
          <button type="button" className="botao" onClick={() => mudarCidade('Belo Horizonte')}>Belo Horizonte</button>
          <button type="button" className="botao" onClick={() => mudarCidade('São Paulo')}>Sao Paulo</button>
          <button type="button" className="botao" onClick={() => mudarCidade('Rio de Janeiro')}>Rio de Janeiro</button>
      </div>
      <div className="container">
        <UltimoRegistro city={cidade}/>
        <Historico city={cidade}/>
      
      </div>
      </>
    );
  

  
}

export default App;
