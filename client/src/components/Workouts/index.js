import React from 'react'

const Workout = ({exercises})=> {

    if (!exercises.length){
        return <p> What are you waiting for, let's get started!</p>
    }

    return (
    <div>
        <h2>WORKOUT LOG</h2>
        {exercises && 
        exercises.map(exercises => (
            <div> 
            <p>{exercises.exerciseTypes}</p>
                <p>{exercises.sets}</p>
                <p>{exercises.reps}</p>
            </div>
            
        )

        ) }
    </div>
    )
}


export default Workout