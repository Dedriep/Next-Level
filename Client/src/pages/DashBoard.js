import { useQuery } from '@apollo/client';
import { QUERY_LOGGEDIN } from '../utils/queries';
import Workouts from '../components/Workouts'

//authentication to check if user is logged in
//import Auth from '../utils/auth';

//auth variable
//const loggedIn = Auth.loggedIn();


//checks for user
// const user = data?.me


const Dashboard = () => {
    const { loading, data } = useQuery(QUERY_LOGGEDIN);

    return (
        <main>
            <div>
                <p>Congratulations on your progress. You have X Points!</p>
            </div>
            <div>
                <p>Be sure to log your progress.</p>
            {/* </div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <Workouts exercises={exercises} />
            )}
            <div> */}
                <Workouts />
            </div>
        </main>
    );

};

export default Dashboard