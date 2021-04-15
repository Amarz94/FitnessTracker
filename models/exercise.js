const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema ({
    day: {
        type: Date,
        default: () => new Date(),
    },
    exercises: [
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
            duration: {
                type: Number,
                required: 'Enter duration in minutes',
              },
            sets: {
                type:Number,
                
            },
            reps: {
                type:Number,
                
            },
            time: {
                type:Number,
                
            },
            distance: {
                type:Number,
                
            },
            
            
        }
    ]

})

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise