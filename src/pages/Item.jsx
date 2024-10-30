import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../lib/fakeStore';
import ItemCard from '../components/ItemCard';

const Item = () => {
    const { productId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        getProductById(productId)
            .then((data) => setItem(data))
            .catch((error) => console.error(error));
    }, [productId]);
    return (
        <div>
            <h3 className='text-center text-6xl m-6'>Item Page</h3>
            <h4>{productId}</h4>
            <div className='w-1/2 m-auto'>
                <ItemCard {...item} />
            </div>
        </div>
    );
};

export default Item;
