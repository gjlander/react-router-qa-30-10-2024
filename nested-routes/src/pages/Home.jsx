import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-6 py-36'>
            <h1 className='text-6xl font-bold'>Home Page</h1>
            <Link className='btn btn-secondary' to='store'>
                Go to Store Page
            </Link>
        </div>
    );
};

export default Home;
