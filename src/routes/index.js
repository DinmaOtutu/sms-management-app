import { Router } from 'express';
import authRoutes from './auth';

const app = Router();

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to API'
  });
});

app.use('/users', authRoutes);

export default app;
