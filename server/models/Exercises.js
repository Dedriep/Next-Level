const { Schema, model } = require('mongoose');


const excerciseSchema = new Schema (
    {
        exerciseTypes: 
        {
                type: String,
                required: true,
                enum: ['Pushups','Situps', 'Plank','Squat', 'Lunge', 'Pullups', 'Jumprope'  ],
            
        },

        reps: {
            type: Number,
            min: 1

        },

        sets: {
            type: Number,
            min: 1
        },

        time: {
            type:Number,
            
        }

    }

)

const Exercises = model('Exercises', excerciseSchema);



module.exports = Exercises