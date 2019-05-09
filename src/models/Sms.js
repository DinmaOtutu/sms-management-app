import Mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoosePaginate from 'mongoose-paginate';


const SmsSchema = new Schema({
  senderNumber: {
    type: Number,
    required: true,
    unique: true
  },
  receiverNumber: {
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


// apply plugins
SmsSchema.plugin(uniqueValidator);
SmsSchema.plugin(mongoosePaginate);
const Sms = Mongoose.model('Sms', SmsSchema);

export default Sms;
