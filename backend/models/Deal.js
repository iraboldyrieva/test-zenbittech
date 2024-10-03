import mongoose from "mongoose";

const dealSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  ticket: { type: Number, required: true },
  yield: { type: Number, required: true },
  days: { type: Number, required: true },
  sold: { type: Number, required: true },
  image: { type: String, required: true },
});

const Deal = mongoose.model("Deal", dealSchema);
export default Deal;
