import express, {Request, Response} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
// import adminRoutes from './routes/admin';
import {routes} from './routes';

const app = express();

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000']
    // methods: ['GET', 'POST', 'PUT', 'DELETE'],
    // allowedHeaders: ['Content-Type', 'Authorization'],
}));

routes(app);

app.listen(8000, () => {
  console.log('Server is running on port 8000. Listening');
});