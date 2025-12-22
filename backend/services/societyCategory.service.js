import SocietyCategory from '../models/societyCategory.model.js';
import logger from '../utils/logger.js';

class SocietyCategoryService {
  async createCategories(categories) {
    try {
      const docs = await SocietyCategory.insertMany(categories, { ordered: false });
      return docs;
    } catch (err) {
        console.log(`error in creating categories createCategories backend/services/societyCategory.service.js`);
        logger.error(`SocietyCategoryService.createCategories | ${err.message || JSON.stringify(err)}`);
      throw err;
    }
  }

  async createCategory(payload) {
    try {
      const doc = await SocietyCategory.create(payload);
      return doc.toObject ? doc.toObject() : doc;
    } catch (err) {
        console.log(`error in creating category createCategory backend/services/societyCategory.service.js`);
        logger.error(`SocietyCategoryService.createCategory | ${err.message || JSON.stringify(err)}`);
      throw err;
    }
  }

  async getAllCategories() {
    try {
      const docs = await SocietyCategory.find({}).lean();
      return docs;
    } catch (err) {
        console.log(`error in getting categories getAllCategories backend/services/societyCategory.service.js`);
        logger.error(`SocietyCategoryService.getAllCategories | ${err.message || JSON.stringify(err)}`);
      throw err;
    }
  }

  async updateCategory(id, payload) {
    try {
      if (!id) throw { status: 400, message: 'Invalid id' };
      const updated = await SocietyCategory.findByIdAndUpdate(id, payload, { new: true }).lean();
      if (!updated) throw { status: 404, message: `Category with ID ${id} not found` };
      return updated;
    } catch (err) {
        console.log(`error in updating category updateCategory backend/services/societyCategory.service.js`);
        logger.error(`SocietyCategoryService.updateCategory | ${err.message || JSON.stringify(err)}`);
      throw err;
    }
  }

  async deleteCategory(id) {
    try {
      if (!id) throw { status: 400, message: 'Invalid id' };
      const removed = await SocietyCategory.findByIdAndDelete(id).lean();
      if (!removed) throw { status: 404, message: `Category with ID ${id} not found` };
      return removed;
    } catch (err) {
        console.log(`error in deleting category deleteCategory backend/services/societyCategory.service.js`);
        logger.error(`SocietyCategoryService.deleteCategory | ${err.message || JSON.stringify(err)}`);
      throw err;
    }
  }
}

export default SocietyCategoryService;
