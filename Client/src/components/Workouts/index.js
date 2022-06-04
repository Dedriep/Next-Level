import React from 'react'

const Workouts = ({exercises})=> {

    if (!exercises){
        return <p> What are you waiting for, let's get started!</p>
    }

    return (
    <div>
        <h2>WORKOUT LOG</h2>
        {exercises && 
        exercises.map(exercises => (
            <div key={exercises._id} style={{border: "solid blue 3px"}}> 
            <p>{exercises.exerciseTypes}</p>
                <p>{exercises.sets}</p>
                <p>{exercises.reps}</p>
            </div>
            
        )

        ) }
    </div>
    )
}


export default Workouts