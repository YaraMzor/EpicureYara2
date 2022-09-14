import mongoose from "mongoose";

const connectDb = async () => {
await mongoose.connect("mongodb+srv://yaramzor:yara123456789@cluster0.jsuyaun.mongodb.net/test");
};
export { connectDb }