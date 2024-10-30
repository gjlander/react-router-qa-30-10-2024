import { /*useNavigate,*/ useOutletContext, Navigate } from 'react-router-dom';

const Signin = () => {
    const { signedIn, setSignedIn } = useOutletContext();

    // const navigate = useNavigate();
    const handleClick = () => {
        setSignedIn(true);
        // setTimeout(() => navigate('/'), 1000);
    };

    if (signedIn) return <Navigate to='/store' />;

    return (
        <div className='flex flex-col items-center justify-center min-h-[75vh]'>
            {signedIn && <h2>You are already signed in.</h2>}
            <button onClick={handleClick} className='btn btn-success'>
                Sign In
            </button>
        </div>
    );
};

export default Signin;
