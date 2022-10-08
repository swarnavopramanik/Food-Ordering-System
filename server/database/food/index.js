import mongoose from 'mongoose';

const FoodSchema = new mongoose.Schema(
  {
    name: { type: String,require: true},
    descript: { type: String,require: true},
    isVeg: { type: Boolean,require: true},
    inContainsEgg: { type: Boolean,require: true},
    category: { type: String,require: true},
    photos: {
      type: mongoose.Types.ObjectId,
      ref: "images",
    },
    price: { type: Number, default: 150, require: true},
    addOns: [
      {
        type: mongoose.Types.ObjectId,
        ref: "foods",
      },
    ],
    restaurant: {
      type: mongoose.Types.ObjectId,
        ref: "restaurant",
        required: true,
    },

  },
  {
    timestamps: true,
  }

);

export const FoodModel = mongoose.model("foods", FoodSchema)
  