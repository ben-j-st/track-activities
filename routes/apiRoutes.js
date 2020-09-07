const Workout = require("../models/workout.js");

// Get users last workout

app.get("/api/workouts", (req, res) => {
    Workout.find({}, (err, data) => {
        if (err) {
            console.log(err)
        }
        res.json(data)
    })
})

app.post("/api/workouts", (req, res) => {
    console.log("trying to add a workout \n");
    Workout.create({})
    .then(workoutData => {
        console.error(workoutData);
        res.json(workoutData)
    }).catch(err => {
        console.log("err", err);
    }) 
})

app.put("/api/workouts/:id", (req, res) => {
    console.log("running an update on a workout \n")
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