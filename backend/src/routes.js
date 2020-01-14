import { Router } from 'express';
import axios from 'axios';
import Dev from './app/models/Dev';

const routes = new Router();

/**
 * Query params
 * Route params
 * body params
 */

  routes.post('/devs', async (req, res) => {
    const { github_username, techs } = req.body;

    const response = await axios.get(`https://api.github.com/users/${github_username}`);

    const { name = login, bio, avatar_url } = response.data;


    // trim() elimina espaçamentos antes e depois do elemento
    const techsArray = techs.split(',').map(tech => tech.trim());

   const dev = await Dev.create({
      github_username,
      name,
      avatar_url,
      bio,
      techs: techsArray
    });

    return res.json(dev);

  });


export default routes;
