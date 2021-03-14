const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const workoutSchema =new Schema({
    date: {
        type: Date,
        required: "Enter a Date",
        default: Date.now
    },
    exercises:[
        {
         type: {
            type: String,
            trim:true,
            required: "Enter Exercise Type"
         },
         name:{
            type: String,
            trim:true,
            required: "Exercise Name"
         },
         duration:{
             type: Number,
             required: "Duration"
         },
         weight:{
             type:Number,
         },
         reps: {
             type:Number,
         },
         sets:{
             type:Number,
         },
         distance:{
             type: Number,
         },   
        }
    ]
});

const workout =mongoose.model("workout", workoutSchema)
module.exports = workout;
