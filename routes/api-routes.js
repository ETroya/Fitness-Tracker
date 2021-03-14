const router= require ("express").Router();
const db =require ("../models/workout")

//Adding New Workout
router.post('/api/workouts', ({body}, res)=>{
    db.workout.create(body)
    .then(dbworkout=>{
        res.json(dbworkout);
    })
})

//workout exercises by ID 
router.put('./api/workouts/:id', (req,res)=>{
    db.workout.updateOne(
        {_id:req.params.id},
        {$push: {exercises: req.body}}
    )
    .then(dbworkout=>{
        res.json(dbworkout);
    });
});

// Previous Workouts
router.get('/api/workouts', (req,res)=> {
    db.workout.find({})
    .then (dbWorkout=>{
        console.log(dbWorkout);
        res.json(dbWorkout);
    })
});

//last seven workouts
router.get("/api/workouts/range", (req,red)=>{
    db.workout.find({})
    .sort({_id: -1})
    .limit(7)
    .then(dbworkout=>{
        console.log(dbworkout);
        res.json(dbworkout);
        console.log(dbworkout);
    })
})

module.exports =router;