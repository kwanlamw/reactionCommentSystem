import express from 'express';
import bodyParser from 'body-parser';
// import routes from './routes';
import connect from './connect';

const app = express();
const port = 8080;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// import Knex from 'knex';
// const knexConfig = require('./knexfile');

// const commentService = new CommentService(knex);
// export const commentController = new CommentController(commentService);
// const reactionService = new ReactionService(knex);
// export const reactionController = new ReactionController(reactionService);

// const API_VERSION = '/api/v1';
import { routes } from './routes';
// app.use(API_VERSION, routes);
app.use(routes);

app.get('/', (req, res) => {
    res.json({ message: 'test get' });
});

app.post('/', (req, res) => {
    res.json({ message: 'test post' });
});

app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});

const db = 'mongodb://localhost:27017/commentDB';
connect({db});
// routes({  app });