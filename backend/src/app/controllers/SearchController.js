import Dev from "../models/Dev";
import StringToArray from '../../utils/StringToArray';

class SearchController {

async index (req, res){
  // Buscar dev's num raio de 10km
  // Filtro por tech

  const { latitude, longitude, techs } = req.query;

  const techsArray = StringToArray(techs);

  const devs = await Dev.find({
    techs: {
      $in: techsArray,
    },
    location: {
      $near: {
        $geometry: {
          type: 'Point',
          coordinates: [longitude, latitude]
        },
        $maxDistance: 10000,
      }
    },
  });

  return res.json({ devs });

  }
}
export default new SearchController();
