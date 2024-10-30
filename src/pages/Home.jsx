import { useOutletContext } from 'react-router-dom';
const Home = () => {
    const { signedIn } = useOutletContext();
    return (
        <div className='flex flex-col items-center justify-center gap-6 py-36'>
            <h1 className='text-6xl font-bold'>Home Page</h1>
            {signedIn && <h2 className='text-4xl'>Welcome back!</h2>}
            <a className='btn btn-secondary' href='store'>
                Go to Store Page
            </a>
        </div>
    );
};

export default Home;
