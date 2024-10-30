const Navbar = () => {
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
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='store'>Store</a>
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
