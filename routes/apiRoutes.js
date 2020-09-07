const Workout = require("../models/workout.js");

// Get users last workout
module.exports = function (app) {

    app.get("/api/workouts", (req, res) => {
        Workout.find({}, (err, data) => {
            if (err) {
                console.log(err)
            }
            res.json(data)
        })
    })

    app.post("/api/workouts", (req, res) => {
        Workout.create({})
        .then(data => {
            res.json(data)
        }).catch(err => {
            console.log("err", err);
        }) 
    })

    app.put("/api/workouts/:id", (req, res) => {
        const id = req.params.id;

        Workout.update(
            {
                id
            }, 
            { 
                $push: {
                    exercise: req.body
                }    
            }, 
            {
                new: true
            }, (err, data) => {
                if (err) {
                    console.log(err);
                }
                res.json(data)
            }
        )
    })
}
