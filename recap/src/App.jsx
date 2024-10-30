import Home from './pages/Home';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <main className='grow'>
                <Home />
            </main>
            <Footer />
        </div>
    );
}

export default App;
