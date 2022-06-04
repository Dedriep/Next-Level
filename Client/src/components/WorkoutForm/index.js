import { useMutation } from "@apollo/client";
import React, {useState} from "react";
import { ADD_WORKOUT } from "../../utils/mutations";

const WorkoutForm = ({ userId }) => {

    const [workType, setWorkType] = useState("");
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");

    const [addWorkout] = useMutation(ADD_WORKOUT);

    const handleButtonClick = async () => {
        try {
            const { data } = await addWorkout({
                variables: {
                    userId: userId,
                    exerciseTypes: workType,
                    sets: parseInt(sets),
                    reps: parseInt(reps)
                }
            });

            setWorkType("");
            setSets("");
            setReps("");

            console.log(data);
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <div>
            <h1>Add a Workout</h1>
            <div>
                <label>Exercise Type: </label>
                <input type="text" value={workType} onChange={(e) => setWorkType(e.target.value)}/>
                <label> Sets: </label>
                <input type="number" value={sets} onChange={(e) => setSets(e.target.value)}/>
                <label> Reps: </label>
                <input type="number" value={reps} onChange={(e) => setReps(e.target.value)}/>
                <br />
                <button onClick={() => handleButtonClick()}>Add Workout</button>
            </div>
        </div>
    )

}


export default WorkoutForm