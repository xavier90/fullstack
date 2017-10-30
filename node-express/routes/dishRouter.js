const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();//conitue to process all related to dishes
})
.get((req, res, next) => { //modified parameter req and res will pass to function below
  res.end("Will send all the dishes to you.");
})
.post((req, res, next) => {
  res.end("Will add the dish " + req.body.name + " with details " + req.body.description);
})
.put((req, res, next) => {
  res.statusCode = 403;
  res.end("Put operation is not supported on /dishes");
})
.delete((req, res, next) => {
  res.end("Deleting all the dishes");
});


dishRouter.route('/:dishId')
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  next();
})
.get((req, res, next) => {
  res.end("Will send details of dish: " + req.params.dishId + " to you.");
})
.post((req, res, next) => {
  res.end("POST is not supported for /dishes/dishId.");
})
.put((req, res, next) => {
  res.write("Updating details of dish: " + req.params.dishId);
  res.end("Will update dish " + req.body.name + " with details " + req.body.description);
})
.delete((req, res, next) => {
  res.end("Deleting dish " + req.params.dishId);
});

module.exports = dishRouter;
