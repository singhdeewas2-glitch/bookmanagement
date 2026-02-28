const mongoose = require("mongoose")
const userSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      enum: ["Mr", "Mrs", "Miss"]
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      match: [/^[0-9]{10}$/, "Phone number must be 10 digits"]
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"]
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 15
    },
    address: {
      street: { type: String },
      city: { type: String },
      pincode: { type: String }
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model("User", userSchema)