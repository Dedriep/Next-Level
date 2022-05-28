const { Schema, model } = require('mongoose');


const exerciseSchema = new Schema (
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

const Exercises = model('Exercises', exerciseSchema);



module.exports = Exercises