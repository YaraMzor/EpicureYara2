import mongoose from 'mongoose';

const dishsSchema = new mongoose.Schema(
    {
      pictureURL:{
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      restaurants: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      type: {
        type: String,
        required: true
      },
      category: {
        type: String,
        required: true
      },
    },
    { timestamps: true }
  );
  
const Dishs = mongoose.model('Dishs', dishsSchema);
  
export default Dishs;

