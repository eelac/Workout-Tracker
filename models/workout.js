const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter an excercise type",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter an excercise name",
      },
      duration: {
        type: Number,
        trim: true,
        required: "Enter an excercise time in minutes",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
