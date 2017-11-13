const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Dishes = require('../models/dishes');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.get((req, res, next) => { //modified parameter req and res will pass to function below
  Dishes.find({})
  .then((dishes) => {  //dishes is the result
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(dishes);
  }, (err) => next(err))
  .catch((err) => next(err));
})
.post((req, res, next) => {
  Dishes.create(req.body)
  .then((dish) => {
    console.log('Dish created ', dish);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(dish);
  }, (err) => next(err))
  .catch((err) => next(err));
})
.put((req, res, next) => {
  res.statusCode = 403;
  res.end("Put operation is not supported on /dishes");
})
.delete((req, res, next) => {
  Dishes.remove({})
  .then((resp) => {//response from the database
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(resp);
  }, (err) => next(err))
  .catch((err) => next(err));
});


dishRouter.route('/:dishId')
.get((req, res, next) => {
  Dishes.findById(req.params.dishId)
  .then((dish) => {  //dishes is the result
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(dish);
  }, (err) => next(err))
  .catch((err) => next(err));
})
.post((req, res, next) => {
  res.end("POST is not supported for /dishes/dishId.");
})
.put((req, res, next) => {
  Dishes.findByIdAndUpdate(req.params.dishId, {
    $set: req.body
  }, {new: true})
  .then((dish) => {
    console.log('Dish created ', dish);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(dish);
  }, (err) => next(err))
  .catch((err) => next(err));
})
.delete((req, res, next) => {
  Dishes.findByIdAndRemove(req.params.dishId)
  .then((resp) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(resp);
  }, (err) => next(err))
  .catch((err) => next(err));
});

module.exports = dishRouter;
