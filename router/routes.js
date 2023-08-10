const express = require('express');
const routes = express.Router();
const userController =  require('../controller/userController');

routes.get('/user', userController.selectUser);
routes.post('/user', userController.createUser);
routes.post('/user/authenticated', userController.authenticatedUser);
routes.delete('/user', userController.deleteUser);
routes.put('/user', userController.updateUser);


module.exports = routes