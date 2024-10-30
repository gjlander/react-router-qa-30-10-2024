import { useState, useEffect } from 'react';

import { getProducts } from '../lib/fakeStore';
import ItemCard from '../components/ItemCard';

const Store = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then((data) => setProducts(data))
            .catch((error) => console.error(error));
    }, []);
    return (
        <div>
            <h1 className='text-center text-6xl m-6'>Store Page</h1>
            <div className='grid grid-cols-3 auto-rows-min gap-8 w-3/4  m-auto'>
                {products &&
                    products.map((product) => {
                        return <ItemCard key={product.id} {...product} />;
                    })}
            </div>
        </div>
    );
};

export default Store;