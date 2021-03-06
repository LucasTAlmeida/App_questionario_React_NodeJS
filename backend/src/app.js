import express from 'express';
import mongoose, { mongo } from 'mongoose';
import routes from './routes';

class App{

constructor(){
    this.server = express();

    this.database();
    this.middleware();
    this.routes();
}

middleware(){

    this.server.use(express.json());
}
database(){
    mongoose.connect('mongodb+srv://admin:admin@questoesvoto.vjeow.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
     {useNewUrlParser: true, useUnifiedTopology: true }
     );
}

routes(){
    this.server.use(routes);
}
}

export default new App().server;