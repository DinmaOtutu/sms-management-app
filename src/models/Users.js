import Mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoosePaginate from 'mongoose-paginate';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const SALT_FACTOR = 10;

const hashPassword = async (plaintext, saltFactor = SALT_FACTOR) => {
  const hash = bcrypt.hash(plaintext, saltFactor);
  return hash;
};
const UsersSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
    unique: true
  },
},
{
  timestamps: {
    created_At: 'created_At', updated_At: 'updated_At'
  }
});

UsersSchema.methods.generateToken = function generateToken(payload, time) {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: time || process.env.TOKEN_EXPIRES_IN
  });
};
UsersSchema.methods.comparePassword = function validPassword(userPassword) {
  const match = bcrypt.compare(userPassword, this.password);
  return match;
};
// eslint-disable-next-line func-names
UsersSchema.methods.toJSON = function () {
  const response = this.toObject();
  delete response.password;
  return response;
};

UsersSchema.pre('save', async function save(next) {
  // hash password if new or modifed
  if (this.isModified('password')) {
    try {
      this.password = await hashPassword(this.password);
    } catch (error) {
      return next(error);
    }
  }
  return next();
});
UsersSchema.pre('findOneAndUpdate', async (next) => {
// re-hash password if updated
  if (this._update.password) {
    try {
      this._update.password = await hashPassword(this._update.password);
    } catch (error) {
      return next(error);
    }
  }
  return next();
});

// apply plugins
UsersSchema.plugin(uniqueValidator);
UsersSchema.plugin(mongoosePaginate);
const Users = Mongoose.model('Users', UsersSchema);

export default Users;
