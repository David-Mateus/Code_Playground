import mongoose from "mongoose";
async function connectDatabase(){
  mongoose
  .connect(
    "mongodb+srv://dmls:07081998David@cluster0.yfhs2ww.mongodb.net/?retryWrites=true&w=majority"
  )
}
export default connectDatabase
