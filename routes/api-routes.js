const router= require("express").Router();
const db =require ("../models")

//Adding New Workout
router.post('/api/workouts', ({body}, res)=>{
    db.Workout.create(body)
    .then(dbworkout=>{
        res.json(dbworkout);
    })
})

//workout exercises by ID 
router.put('/api/workouts/:id', (req,res)=>{
    db.Workout.updateOne(
        {_id:req.params.id},
        {$push: {exercises: req.body}}
    )
    .then(dbworkout=>{
        res.json(dbworkout);
    });
});

// Previous Workouts
router.get('/api/workouts', (req,res)=> {
    db.Workout.find({})
    .then (dbWorkout=>{
        console.log(dbWorkout);
        res.json(dbWorkout);
    })
});

//last seven workouts
router.get("/api/workouts/range", (req,res)=>{
    db.Workout.find({})
    .sort({_id: -1})
    .limit(7)
    .then(dbworkout=>{
        console.log(dbworkout);
        res.json(dbworkout);
        console.log(dbworkout);
    })
})

module.exports =router;