import mongoose from "mongoose";

const DogSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    breed: {
      type: String,
      required: true,
      trim: true,
    },

    age: {
      type: Number,
      required: true,
      min: 0,
    },

    location: {
      type: String,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    status: {
      type: String,
      enum: ["open", "adopted", "paused"],
      default: "open",
    },

    imageUrl: {
      type: String,
      trim: true,
    },
   contact: {
  type: String,
  required: true,
  trim: true
}
  },
  { timestamps: true }
);

const Dog = mongoose.models.Dog || mongoose.model("Dog", DogSchema);

export default Dog;


    



    

