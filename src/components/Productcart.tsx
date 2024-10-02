import React from 'react'
import { FaPlus } from 'react-icons/fa';

type ProductProps = {
    productId: string;
    photo: string;
    name: string;
    price: string;
    stock: string;
    handler: () => void;
}

const server = "abnce";
const Productcart = ({ productId, photo, name, price, stock, handler }: ProductProps) => {
    return (
        <div className='product-card'>
            <img src={photo} alt={name} />
            <p>{name}</p>
            <span>${price}</span>
            <div>
                <button onClick={() => handler}>
                    <FaPlus />
                </button>
            </div>
        </div>
    )
}

export default Productcart;