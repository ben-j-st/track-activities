const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: { 
      type: Date, 
      default: Date.now 
    },
    exercise: [
      {
        type: {
          type: String,
          trim: true,
          required: "You Must Select A Type Of Exercise"
        },
        name: {
          type: string,
          trim: true,
          required: "Please Enter The Name Of The Exercise"
        },
        duration: {
          type: Number,
          required: "Please Enter he Exercise Duration In Minuets"
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
      // include any virtual properties when data is requested
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
