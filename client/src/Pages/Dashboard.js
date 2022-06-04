import { useQuery } from '@apollo/client';
import { QUERY_LOGGEDIN, QUERY_WORKOUTS } from '../utils/queries';
import Workouts from '../components/Workouts'
import { Navigate, useParams } from 'react-router-dom';


//authentication to check if user is logged in
//import Auth from '../utils/auth';

//auth variable
//const loggedIn = Auth.loggedIn();


//checks for user
// const user = data?.me

//do we need use params?
const Dashboard = (props) => {
    const { loading, data } = useQuery(QUERY_LOGGEDIN);
    const workoutData = useQuery(QUERY_WORKOUTS)
    

    // define variable for model

    return (
        <main>

      {/* checks if user is logged in and if it's their profile 
      {
          loggedIn
      }
      
      */}
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

            <div>
            </div>
                <Workouts />
            </div>
        </main>
    )

}

export default Dashboard