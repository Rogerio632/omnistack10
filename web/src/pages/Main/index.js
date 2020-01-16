import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { api } from '../../services/api';

function Main() {

  const [github_username, setUserName] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  /**
   * -> Executa uma função que retorna um callback(sucess - error)
   * -> o primeiro parâmetro denota
   */

   useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);

        console.log(`latitude: ${latitude} / longitude: ${longitude}`);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      },
    )
  }, []);

  async function handleSubmit(e){
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude
    });

    setUserName('');
    setTechs('');

    console.log(response.data);

  }

  return (

    <Container id="app">

      <aside className="main-aside">
        <strong>Cadastrar</strong>

        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input
             name="github_username"
              id="github_username"
               required
               value={github_username}
               onChange={e => setUserName(e.target.value)}
               />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
             name="techs"
              id="techs"
               required
               value={techs}
               onChange={e => setTechs(e.target.value)}
               />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input

                name="latitude"
                 id="latitude"
                  value={latitude}
                  onChange={e => setLatitude(e.target.value)}
                  required
                    />
            </div>


            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
               type="number"
                name="longitude"
                 id="longitude"
                  onChange={e => setLongitude(e.target.value) }
                   required
                    value={longitude}
                     />
            </div>
          </div>

          <button type="submit">Salvar</button>

        </form>

      </aside>

      <main>
        <ul>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/48360931?s=460&v=4" alt="Imagem de usuário" />
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
