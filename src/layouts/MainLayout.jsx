import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
const MainLayout = () => {
    const [signedIn, setSignedIn] = useState(false);
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar signedIn={signedIn} setSignedIn={setSignedIn} />
            <main className='grow'>
                <Outlet context={{ signedIn, setSignedIn }} />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
