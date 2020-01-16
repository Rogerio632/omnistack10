import axios from 'axios';
import Dev from '../models/Dev';
import StringToArray from '../../utils/StringToArray';


class DevController{

async index(req, res){

const devs = await Dev.find();

return res.json(devs);

}

async store(req, res){

  const { github_username, techs, latitude, longitude } = req.body;

  const response = await axios.get(`https://api.github.com/users/${github_username}`);

  const { login, name = login, bio, avatar_url } = response.data;

  let formatedLogin = github_username.toLowerCase();

  let dev = await Dev.findOne({ formatedLogin });

  if(dev){
    return res.json({error: "You are already registered in this website"});
  }

  // trim() elimina espaçamentos antes e depois do elemento
    const techsArray = StringToArray(techs);

  /*
  ** Transforma a lont e lat recebida em uma localização pontual
  ** o type e coordinates aqui preenchidas, são iniciadas no PointSchema.
  */
  const location = {
    type: 'Point',
    coordinates: [longitude, latitude],
  };

    dev = await Dev.create({
     github_username,
     name,
     avatar_url,
     bio,
     techs: techsArray,
     location
   });

  return res.json(dev);


  }
}

export default new DevController();
