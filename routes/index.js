import { Router } from 'express';
import usersController from '../controllers/usersController.js';
import { catchAsync } from '../middlewares/errors.js';

export default () => {
    const api = Router();

    // GET /users/:id
    api.get('/:id', catchAsync(usersController.findOne));

    //GET  /users
    api.get('/', catchAsync(usersController.findAll));

    //POST /users
    api.post('/', catchAsync(usersController.create));

    //PUT /users/:id
    api.put('/', catchAsync(usersController.update));

    //DELETE /songs/:id
    api.delete('/:id', catchAsync(usersController.remove));
    return api;
};



