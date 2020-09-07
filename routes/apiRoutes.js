const Workout = require("../models/workout.js");
const router = require("express").Router();

// Get users last workout

router.get("/api/workouts", (req, res) => {
    Workout.find({}, (err, data) => {
        if (err) {
            console.log(err)
        }
        res.json(data)
    })
})

router.post("/api/workouts", (req, res) => {
    Workout.create(
        {
            day: new Date(),
            exercise: [],
        }).then(workoutData => {
            res.json(workoutData)
        }) 
})

router.put("/api/workouts/:id", (req, res) => {
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

module.exports = router;