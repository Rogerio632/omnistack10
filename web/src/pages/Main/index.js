import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { api } from '../../services/api';
import DevForm from '../../components/DevForm/index';
import DevItem from '../../components/DevItem/index';

function Main() {

  const [devs, setDev] = useState([]);
  /**
   * -> Executa uma função que retorna um callback(sucess - error)
   * -> o primeiro parâmetro denota
   */

  useEffect(() => {
    async function loadDevs(){
      const response = await api.get('/devs');

      setDev(response.data);
    }

    loadDevs();
  }, []);


  async function handleSubmit(data){

    const response = await api.post('/devs', data);

    setDev([...devs, response.data]);

  }

  return (

    <Container id="app">

      <aside className="main-aside">
        <strong>Cadastrar</strong>

        <DevForm onSubmit={handleSubmit}  />

      </aside>

      <main>
        <ul>
          {devs.map(dev =>

          <DevItem key={dev._id} dev={dev} />

          )}
        </ul>
      </main>

    </Container>

  );

}

export default Main;
