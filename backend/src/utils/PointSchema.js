import mongoose from 'mongoose';

/**
 * Foi criado o PointSchema
 * com o intuito de ser útil a toda
 * funcionalidade da aplicação que necessite
 * receber coordenadas de localização.
 */

const PointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

export default PointSchema;
