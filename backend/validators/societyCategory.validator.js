import Joi from 'joi';

export const createCategorySchema = Joi.object({
  name: Joi.string().trim().required(),
  description: Joi.string().trim().optional().allow('', null),
});

export const createCategoriesSchema = Joi.object({
  categories: Joi.array().items(createCategorySchema).min(1).required(),
});

export const updateCategorySchema = Joi.object({
  name: Joi.string().trim().optional(),
  description: Joi.string().trim().optional().allow('', null),
}).min(1);
