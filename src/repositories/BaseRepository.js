/**
 * @description BaseRepository
 * @class BaseRepository
 */
class BaseRepository {
/**
 * @description create a new document
 * @param {Model} Model
 * @param {option} options
 * @returns {document} returns a newly created document
 */
  static async create(Model, options) {
    try {
      const document = await Model.create(options);
      return document;
    } catch (error) {
      throw error;
    }
  }

  /**
 * @description find document
 * @param {Model} Model
 * @param {option} field
 * @param {option} value
 * @returns {document} returns a newly created document
 */
  static async findByField(Model, field, value) {
    try {
      const document = await Model.find({ [field]: value }).exec();
      return document;
    } catch (error) {
      throw error;
    }
  }
}

export default BaseRepository;
