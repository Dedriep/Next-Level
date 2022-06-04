import { useQuery } from '@apollo/client';
import { QUERY_LOGGEDIN } from '../utils/queries';

const Dashboard = () => {
    const { loading, data } = useQuery(QUERY_LOGGEDIN);

    return (
        <main>
            <div>
                <p>Congratulations on your progress. You have X Points!</p>
            </div>
            <div>
                <p>Be sure to log your progress.</p>
            </div>
        </main>
    )

}

export default Dashboard