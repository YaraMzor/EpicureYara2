import mongoose from 'mongoose';

const chefsSchema = new mongoose.Schema(
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
        type: [],
        required: true
      }
    },
    { timestamps: true }
  );
  
const Chefs = mongoose.model('Chefs', chefsSchema);
  
export default Chefs;

