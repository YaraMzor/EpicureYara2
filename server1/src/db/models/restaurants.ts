import mongoose from 'mongoose';

const restaurantsSchema = new mongoose.Schema(
    {
      pictureURL:{
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      chef: {
        type: String,
        required: true
      },
      status: {
        type: [],
        required: true
      },
    },
    { timestamps: true }
  );
  
const Restaurants = mongoose.model('Restaurants', restaurantsSchema);
  
export default Restaurants;

