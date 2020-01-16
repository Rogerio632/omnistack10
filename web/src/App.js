import React from 'react';
import GlobalStyle from './styles/global';
import Routes from './routes';


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
  return(
    <>
   <GlobalStyle />
    <Routes />
    </>
    );
  }
  
    export default App;
