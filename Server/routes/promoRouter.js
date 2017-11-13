const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})
.get((req, res, next) => {
  res.end("Will send details of promotions");
})
.post((req, res, next) => {
  res.end("Updating promotions: " + req.body.name + " with details: " + req.body.description);
})
.put((req, res, next) => {
  res.end("PUT operation is not supported.");
})
.delete((req, res, next) => {
  res.end("Deleting promotions: " + req.body.name);
});

promoRouter.route('/:promoId')
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})
.get((req, res, next) => {
  res.end("Will send you detail of promotion: " + req.params.promoId);
})
.post((req, res, next) => {
  res.end("POST is not supported in /promotions/:promoId");
})
.put((req, res, next) => {
  res.write("Updating promotion: " + req.params.promoId);
  res.end("Will update promotion: " + req.body.name + " with detaiils: " + req.body.description);
})
.delete((req, res, next) => {
  res.end("Deleting promotion: " + req.params.promoId);
});

module.exports = promoRouter;
