import React, { useState } from 'react';

/**
 *  Componente => bloco isolado de HTML/CSS/JS, o qual não interfere
 *                no restante da aplicação.
 *
 *  Propriedade => Informações que um componente PAI passa para um
 *                componente FILHO. Funciona como atributos para
 *                os componentes. 
 * Estado =>  Informação mantida pelo componente (imutável, só pode ser
 *            alterado criando um novo state).
 **/



function App() {
  const [state, setState] = useState(10);

  function increment() {
    setState(state + 1);
  }

  return (
    <>
      <h1>Contador: {state}</h1>
      <button type="button" onClick={increment}>Incrementar</button>
    </>
  );

}

export default App;
