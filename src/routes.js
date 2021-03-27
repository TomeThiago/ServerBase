const express = require('express');

const ExampleController = require('./controllers/ExampleController');

const routes = express.Router();

routes.get('/example', ExampleController.index);
routes.get('/example/:id', ExampleController.index);
routes.post('/example', ExampleController.store);
routes.put('/example/:id', ExampleController.update);
routes.delete('/example/:id', ExampleController.delete);

module.exports = routes;