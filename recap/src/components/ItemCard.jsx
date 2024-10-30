const ItemCard = ({ title, description, price, image }) => {
    return (
        <div className='card glass w-full h-full'>
            <figure className='h-1/2'>
                <img className='w-full h-full' src={image} alt={title} />
            </figure>
            <div className='card-body'>
                <h2 className='card-title'>{title}</h2>
                <p>{description}</p>
                <p>${price}</p>
                <div className='card-actions justify-end'>
                    <button className='btn btn-primary'>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;
