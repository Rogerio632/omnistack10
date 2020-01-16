import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes';


class App {
  constructor(){
    this.server = express();

    this.middlewares();
    this.routes();
    this.mongo();
  }

  middlewares(){
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes(){
    this.server.use(routes);
  }

  mongo(){
    mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-492j0.mongodb.net/semana10?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

}
export default new App().server;
