import express from 'express';
const exploreRouter = express.Router();

import * as controller from '../controllers/society.controller.js';
import validateRequest from '../middleware/validateRequest.js';
import { createSocietySchema } from '../validators/societyDetails.validator.js';



// Read
// exploreRouter.get('/society/:id', controller.getSocietyById);

export default exploreRouter;
