// Estrutura do usado no banco de dados
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  nameMom: {
    type: String,
    required: true,
  },
  nameChild: {
    type: String,
    required: true,
  },
  addressClient: {
    type: String,
    required: true,
  },
  numberPhone: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
export default mongoose.model("User", userSchema);
