import express from 'express';
const societyRouter = express.Router();

import * as controller from '../controllers/society.controller.js';
import validateRequest from '../middleware/validateRequest.js';
import { createSocietySchema } from '../validators/societyDetails.validator.js';

// Create
societyRouter.post('/', validateRequest(createSocietySchema, 'body'), controller.createSociety);

// Get societies by category name
// Get societies by category name using query param: /by-category?category=Name
societyRouter.get('/getByCategory', controller.getSocietiesByCategory);


// Read
societyRouter.get('/:id', controller.getSocietyById);
societyRouter.get('/', controller.getAllSocieties);

// Update
societyRouter.put('/:id', controller.updateSociety);

// Delete
societyRouter.delete('/:id', controller.deleteSociety);

// Note: attach authentication middleware where needed, e.g.
// import auth from '../middlewares/auth.js';
// router.post('/', auth, validateRequest(createSocietySchema, 'body'), controller.create);

export default societyRouter;
