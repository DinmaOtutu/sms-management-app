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
}

export default BaseRepository;
