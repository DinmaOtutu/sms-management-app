import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import logger from 'morgan';
import expressValidator from 'express-validator';
import routes from './routes/index';

const app = express();

app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With,Content-Type,x-auth,Accept,content-type,application/json'
  );
  next();
});
app.use(helmet());
app.use(expressValidator());
app.use(logger('dev'));
// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', routes);

app.use('*', (req, res, next) => {
  res.status(404).json({
    error: 'Invalid route'
  });
  next();
});

export default app;
