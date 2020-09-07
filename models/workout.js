const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: { 
      type: Date, 
      default: Date.now 
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "You Must Select A Type Of Exercise"
        },
        name: {
          type: String,
          trim: true,
          required: "Please Enter The Name Of The Exercise"
        },
        duration: {
          type: Number,
          required: "Please Enter The Exercise Duration In Minuets"
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);


// get total duration
workoutSchema.virtual('totalDuration').get( function() {
  let totalDuration = 0;
  this.exercises.forEach( function(exercise) {
      totalDuration += exercise.duration;
  })
  return totalDuration;
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
