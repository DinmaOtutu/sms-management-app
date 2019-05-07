import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import mongoose from 'mongoose';
import env from 'dotenv';
import App from '../app';

chai.use(chaiHttp);

env.config();


mongoose.Promise = global.Promise;

// connect to data base and drop the database before running each test file
describe('Controller', () => {
  before((done) => {
    mongoose.connect(process.env.DB_URL_TEST, () => {
      mongoose.connection.db.dropDatabase(() => {
        done();
      });
    });
  });
  // create location, get, update and delete Location
  describe('Test for application', () => {
    it('should get the base endpoint', (done) => {
      chai
        .request(App)
        .get('/api')
        .set({
          'Content-type': 'application/json',
        })
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
  });
});
