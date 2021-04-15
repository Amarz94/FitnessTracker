const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema ({
    day: {
        type: Date,
        default: () => new Date(),
    },
    workout: [
        {
            type: {
                type:String,
                trim:true,
                required:"Exercise Type"
            },
            name: {
                type:String,
                trim:true,
                required:"Enter exercise name",
            },
            weight: {
                type:Number,
                trim:true,
                required:"Enter weight(lbs)",
            },
            sets: {
                type:Number,
                trim:true,
                required:"Enter number of sets",
            },
            reps: {
                type:Number,
                trim:true,
                required:"Enter number of sets",
            },
            time: {
                type:Number,
                trim:true,
                required:"Enter duration(minutes)",
            },
            distance: {
                type:Number,
                trim:true,
                required:"Enter distance(miles)",
            },
            
            
        }
    ]

})

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise