const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})
.get((req, res, next) => {
  res.end("Will send leaders");
})
.post((req, res, next) => {
  res.end("Updating leader: " + req.body.name + " with details " + req.body.description);
})
.put((req, res, next) => {
  res.end("PUT is not supported in /leader");
})
.delete((req, res, next) => {
  res.end("Deleting leader: " + req.body.name);
});

leaderRouter.route('/:leaderId')
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})
.get((req, res, next) => {
  res.end("Will send leader: " + req.params.leaderId);
})
.post((req, res, next) => {
  res.end("POST is not supported in /leader/:leaderId");
})
.put((req, res, next) => {
  res.write("Updating leader: " + req.params.leaderId);
  res.end("Will update leader: " + req.body.name + " with details " + req.body.description);
})
.delete((req, res, next) => {
  res.end("Deleting leader: " + req.params.leaderId);
});

module.exports = leaderRouter;
