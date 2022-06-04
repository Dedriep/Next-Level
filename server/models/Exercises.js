const { Schema, model } = require("mongoose");

const exerciseSchema = new Schema({
  exerciseTypes: [
    {
    type: String,
    required: true,
    min: 2,
    max: 30
  }],

  reps: {
    type: Number,
    min: 1,
  },

  sets: {
    type: Number,
    min: 1,
  },
});




const Exercises = model("Exercises", exerciseSchema);

module.exports = Exercises;
