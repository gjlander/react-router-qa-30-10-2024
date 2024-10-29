import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar bg-primary'>
            <div className='navbar-start'>
                <a className='btn btn-ghost text-xl'>daisyUI</a>
            </div>
            <div className='navbar-center lg:flex'>
                <ul className='menu menu-horizontal px-1'>
                    {/* NavLink adds class "active" to the one where the "to" value matches the current URL, you can then use that class to add your own styling */}
                    <li>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'store'}>Store</NavLink>
                    </li>
                </ul>
            </div>
            <div className='navbar-end'>
                <a className='btn'>Button</a>
            </div>
        </div>
    );
};
export default Navbar;
