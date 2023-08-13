import cors from 'cors';
import routes from './routes.js';
import express from 'express';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(process.env.PORT || 3333, () => console.log("Server up!"));