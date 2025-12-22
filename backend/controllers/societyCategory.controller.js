import logger from '../utils/logger.js';
import SocietyCategoryService from '../services/societyCategory.service.js';

const service = new SocietyCategoryService();

export const createCategories = async (req, res, next) => {
  try {
    const categories = req.body.categories;
    const result = await service.createCategories(categories);
    logger.info(`${req.method} ${req.originalUrl} | Create categories | Success | count=${Array.isArray(result) ? result.length : 0}`);
    return res.status(201).json({ success: true, data: result });
  } catch (err) {
    console.log(`error in creating categories createCategories backend/controllers/societyCategory.controller.js`);
    return next(err);
  }
};

export const createCategory = async (req, res, next) => {
  try {
    const result = await service.createCategory(req.body);
    logger.info(`${req.method} ${req.originalUrl} | Create category | Success | name=${result.name}`);
    return res.status(201).json({ success: true, data: result });
  } catch (err) {
    console.log(`error in creating category createCategory backend/controllers/societyCategory.controller.js`);
    return next(err);
  }
};

export const getAllCategories = async (req, res, next) => {
  try {
    const categories = await service.getAllCategories();
    logger.info(`${req.method} ${req.originalUrl} | Get categories | Success | count=${Array.isArray(categories) ? categories.length : 0}`);
    return res.status(200).json({ success: true, data: categories });
  } catch (err) {
    console.log(`error in getting categories getAllCategories backend/controllers/societyCategory.controller.js`);
    return next(err);
  }
};

export const updateCategory = async (req, res, next) => {
  try {
    const updated = await service.updateCategory(req.params.id, req.body);
    logger.info(`${req.method} ${req.originalUrl} | Update category | Success | id=${req.params.id}`);
    return res.status(200).json({ success: true, data: updated });
  } catch (err) {
    console.log(`error in updating category updateCategory backend/controllers/societyCategory.controller.js`);
    return next(err);
  }
};

export const deleteCategory = async (req, res, next) => {
  try {
    const deleted = await service.deleteCategory(req.params.id);
    logger.info(`${req.method} ${req.originalUrl} | Delete category | Success | id=${req.params.id}`);
    return res.status(200).json({ success: true, data: deleted });
  } catch (err) {
    console.log(`error in deleting category deleteCategory backend/controllers/societyCategory.controller.js`);
    return next(err);
  }
};
