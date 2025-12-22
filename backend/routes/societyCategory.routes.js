import express from 'express';
import * as controller from '../controllers/societyCategory.controller.js';
import validateRequest from '../middleware/validateRequest.js';
import { createCategorySchema, createCategoriesSchema, updateCategorySchema } from '../validators/societyCategory.validator.js';

const router = express.Router();

// Create many
router.post('/bulk', validateRequest(createCategoriesSchema, 'body'), controller.createCategories);

// Create single
router.post('/', validateRequest(createCategorySchema, 'body'), controller.createCategory);

// List
router.get('/', controller.getAllCategories);

// Update
router.put('/:id', validateRequest(updateCategorySchema, 'body'), controller.updateCategory);

// Delete
router.delete('/:id', controller.deleteCategory);

export default router;
