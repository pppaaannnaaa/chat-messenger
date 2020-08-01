import dotenv from 'dotenv';

dotenv.config();
import router from './routes'
import pino from 'express-pino-logger';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { ExpressServer } from './server';
import { errorResponse } from './utils/response';
import dba from './config/keys';


const app = express();

// const db = mongoURI;
// connect to mongoDB
mongoose
  .connect(dba.mongoURI)
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch((err: any) => {
    console.log(err);
    console.log('\x1b[31m\x1b[1m MongoDB Not Connected');
  });

app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);
app.use(bodyParser.json());
app.use(pino());
app.use('/api',router );
app.get('/', function (req, res) {
  res.send(`Hello World!`);
  });
app.use((err: any, req: any, res: any, next: any) => {
  req.log.error('General error handler', { err, res });
  errorResponse({
    HTTPHeader: 500,
    errorCode: 'E500',
    error: 'Internal server error',
    relatedData: {no:"use"},
    description: "desription",
    status: "new",
  },res);
});

process.on('unhandledRejection', (reason, 
    // promise
    ) => {
  console.error('Unhandled Rejection at:', {
    err: reason,
  });
});
const es = new ExpressServer();
es.startServer(app);
