// import needed components and functions from react-router-dom
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';

//import components
import Layout from './Layout';
import Home from './pages/Home';
import Store from './pages/Store';
import Item from './pages/Item';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            {/* using index here is like repeating path="/" this is what will appear on the root path */}
            <Route index element={<Home />} />
            {/* other paths will be what's shown in the url, without a "/" at the start */}
            <Route path='store' element={<Store />} />

            {/* having a ":" at the start indicates a dynamic route. This could be used for a product or item page */}
            <Route path='store/:productId' element={<Item />} />
        </Route>
    )
);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
