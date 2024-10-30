import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Store from './pages/Store';
import Item from './pages/Item';
import Signin from './pages/Signin';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='store' element={<Store />} />
            <Route path='store/:productId' element={<Item />} />
            <Route path='signin' element={<Signin />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
