import express from 'express';
import 'express-async-errors';
import errorHandler from './middleware/errorsMid';
import carRoute from './routes/carRoute';
import motorRoute from './routes/motorRoute';

const app = express();
app.use(express.json());
app.use(carRoute);
app.use(motorRoute);
app.use(errorHandler);

export default app;
