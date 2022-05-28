const { Schema, model } = require('mongoose');
const { number } = require('prop-types');


const excerciseSchema = new Schema (
    {
        exerciseTypes: 
        {
                type: String,
                required: true,
                enum: ['Pushups','Situps', 'Plank','Squat', 'Lunge', 'Pullups', 'Jumprope'  ],
            
        },

        reps: {
            type: number,
            min: 1

        },

        sets: {
            type: number,
            min: 1
        },

        time: {
            type:number,
        }

    }

)

const Exercises = model('Exercises', excerciseSchema);



module.exports = Exercises