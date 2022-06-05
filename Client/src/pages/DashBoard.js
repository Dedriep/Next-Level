import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Workouts from '../components/Workouts';
import WorkoutForm from '../components/WorkoutForm';

//authentication to check if user is logged in
//import Auth from '../utils/auth';

//auth variable
//const loggedIn = Auth.loggedIn();


//checks for user
// const user = data?.me


const Dashboard = () => {
    const { data, loading } = useQuery(QUERY_ME);
    const exercises = data?.me.exercises;
    const userId = data?.me._id;

    return (
        <main>
            <div>
                {/* <p>Congratulations on your progress. You have X Points!</p> */}
            </div>
            <div>
                <p>Be sure to log your progress.</p>
            </div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <Workouts exercises={exercises} />
                    <WorkoutForm userId={userId}/>
                </>
            )}
        </main>
    );

};

export default Dashboard