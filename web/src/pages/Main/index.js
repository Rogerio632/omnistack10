import React from 'react';
import { Container } from './styles';

function Main(){
return(

  <Container id="app">
    
  <aside className="main-aside">
    <strong>Cadastrar</strong>

  <form>
    <div className="input-block">
    <label htmlFor="github_username">Usuário do Github</label>
    <input name="github_username" id="github_username" required />
    </div>

    <div className="input-block">
    <label htmlFor="techs">Tecnologias</label>
    <input name="techs" id="techs" required />
    </div>

    <div className="input-group">
    <div className="input-block">
    <label htmlFor="latitude">Latitude</label>
    <input name="latitude" id="latitude" required />
    </div>

    <div className="input-block">
    <label htmlFor="longitude">Longitude</label>
    <input name="longitude" id="longitude" required />
    </div>
    </div>

  <button type="submit">Salvar</button>

  </form>

  </aside>

  <main> 
  <ul>
    <li className="dev-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/48360931?s=460&v=4" alt="Imagem de usuário"/>
      <div className="user-info">
        <strong>Rogério De Oliveira</strong>
        <span>ReactJS, React Native, NodeJS</span>
      </div>
      </header>
      <p>Do. Or do not. There is no try.</p>
      <a href="https://github.com/rogerio632">Acessar perfil do Github</a>
    </li>
    <li className="dev-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/48360931?s=460&v=4" alt="Imagem de usuário"/>
      <div className="user-info">
        <strong>Rogério De Oliveira</strong>
        <span>ReactJS, React Native, NodeJS</span>
      </div>
      </header>
      <p>Do. Or do not. There is no try.</p>
      <a href="https://github.com/rogerio632">Acessar perfil do Github</a>
    </li>
    <li className="dev-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/48360931?s=460&v=4" alt="Imagem de usuário"/>
      <div className="user-info">
        <strong>Rogério De Oliveira</strong>
        <span>ReactJS, React Native, NodeJS</span>
      </div>
      </header>
      <p>Do. Or do not. There is no try.</p>
      <a href="https://github.com/rogerio632">Acessar perfil do Github</a>
    </li>
    <li className="dev-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/48360931?s=460&v=4" alt="Imagem de usuário"/>
      <div className="user-info">
        <strong>Rogério De Oliveira</strong>
        <span>ReactJS, React Native, NodeJS</span>
      </div>
      </header>
      <p>Do. Or do not. There is no try.</p>
      <a href="https://github.com/rogerio632">Acessar perfil do Github</a>
    </li>
    
  </ul>
  </main>

  </Container>

);

}

export default Main;