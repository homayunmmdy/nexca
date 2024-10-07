import mongoose, { Schema } from "mongoose";
//@ts-ignore
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const sectionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    secid: {
      type: Number,
    },
    limit_title: Number,
    limit_description: Number,
  },
  {
    timestamps: true,
  }
);

const Section = mongoose.models.Section || mongoose.model("Section", sectionSchema);

export default Section;