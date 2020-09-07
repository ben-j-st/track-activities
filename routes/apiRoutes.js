const Workout = require("../models/workout.js");

// Get users last workout
module.exports = function (app) {

    app.get("/api/workouts", (req, res) => {
        Workout.find()
        .then(data => res.json(data))
        .catch(err => console.error("error message", err));
    })

    app.post("/api/workouts", (req, res) => {
        Workout.create({})
        .then(data => res.json(data))
        .catch(err => console.error("error message", err));
    })

    app.put("/api/workouts/:id", (req, res) => {
        Workout.findByIdAndUpdate(
            req.params.id, 
            { $push: { exercises: req.body} }, 
            { new: true }
        )
        .then(data => res.json(data))
        .catch(err => console.error("error message", err))
    });

    app.get("/api/workouts/range", (req, res) => {
        Workout.find()
        .then(data => res.json(data))
        .catch(err => console.error("error message", err));
    })

}
