import { useState, useEffect } from 'react';
import { getProductById } from '../lib/fakeStore';
import ItemCard from '../components/ItemCard';

const Item = () => {
    const [item, setItem] = useState({});

    useEffect(() => {
        getProductById(1)
            .then((data) => setItem(data))
            .catch((error) => console.error(error));
    }, [1]);
    return (
        <div>
            <h3 className='text-center text-6xl m-6'>Item Page</h3>
            <div className='w-1/2 m-auto'>
                <ItemCard {...item} />
            </div>
        </div>
    );
};

export default Item;
