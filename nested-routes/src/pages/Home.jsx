import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to='store'>Go to Store Page</Link>
        </div>
    );
};

export default Home;
