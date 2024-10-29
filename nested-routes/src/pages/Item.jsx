import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../lib/fakeStore';
import ItemCard from '../components/ItemCard';

const Item = () => {
    const [item, setItem] = useState({});
    const { productId } = useParams();

    useEffect(() => {
        getProductById(productId)
            .then((data) => setItem(data))
            .catch((error) => console.error(error));
    }, [productId]);
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
