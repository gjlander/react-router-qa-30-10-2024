import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ signedIn, setSignedIn }) => {
    return (
        <div className='navbar bg-primary'>
            <div className='navbar-start'>
                <a className='btn btn-ghost text-xl' href='/'>
                    FakeStore
                </a>
            </div>
            <div className='navbar-center lg:flex'>
                <ul className='menu menu-horizontal px-1'>
                    <li>
                        <NavLink
                            // className={({ isActive }) =>
                            //     isActive ? 'bg-secondary' : ''
                            // }
                            to='/'
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            // className={({ isActive }) =>
                            //     isActive ? 'bg-secondary' : ''
                            // }
                            to='store'
                        >
                            Store
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='navbar-end'>
                {signedIn ? (
                    <button
                        onClick={() => setSignedIn(false)}
                        className='btn btn-accent'
                    >
                        Sign Out
                    </button>
                ) : (
                    <Link to='signin' className='btn'>
                        Sign In
                    </Link>
                )}
            </div>
        </div>
    );
};
export default Navbar;
