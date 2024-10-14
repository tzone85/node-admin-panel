import express, {Request, Response} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
// import adminRoutes from './routes/admin';

const app = express();

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000']
    // methods: ['GET', 'POST', 'PUT', 'DELETE'],
    // allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(8000, () => {
  console.log('Server is running on port 8000. Listenning');
});