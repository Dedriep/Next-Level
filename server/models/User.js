const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema (
{
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        match: [/.+@.+\..+/, 'Must match an email address on file!'],
        unique: true,
    },

    password: {
        required: true,
        type: String,
        minlength: 9
        
    },

    tracker: {
        required: true,
        default: 1,
        type: Number,
    },

    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Exercises'
          }
    ]
},

{
    toJSON: {
        virtuals:true
    }
})

userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 9;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next()
  }
  )
  
  userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password)
  
}


const User = model('User', userSchema)



module.exports = User