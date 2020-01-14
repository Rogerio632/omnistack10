import mongoose from 'mongoose';
import PointSchema from '../../utils/PointSchema';

/**
 * O DevSchema foi criado como uma forma
 * de armazenar os dev's cadastrados no sistema
 * sem o compromisso de realizar relacionamentos com outras
 * tabelas, sendo autossuficiente para o funcionamento do sistema.
 */

const DevSchema = new mongoose.Schema({
  name: String,
  github_username: String,
  bio: String,
  avatar_url: String,
  techs: [String],
  /** o location foi passado aqui
   *  para que pudessemos receber, junto
   *  com as config antes realizadas,
   *  para todas as info do user serem salvas
   *  unicamente.
   */
  location: {
    type: PointSchema,
    index: '2dsphere'
  },
});

export default mongoose.model('Dev', DevSchema);
