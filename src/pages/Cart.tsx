import React, { useEffect, useState } from 'react'
import { photo } from '../assets/data'
import { Link } from 'react-router-dom';
import { RiErrorWarningFill } from "react-icons/ri";
import CartItem from '../components/CartItem';

const cartItems = [
    {
        productId: 'asdf',
        photo: photo,
        name: "MacBook",
        price: 3000,
        quantity: 4,
        stock: 10
    }
]

const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subtotal + tax + shippingCharges;

const Cart = () => {
    const [couponCode, setCouponCode] = useState<string>("");
    const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

    useEffect(() => {

        const timeOutID = setTimeout(() => {
            if (Math.random() > 0.5) setIsValidCouponCode(true);
            else setIsValidCouponCode(false);
        }, 1000);

        return () => {
            clearTimeout(timeOutID);
            setIsValidCouponCode(false);
        };
    }, [couponCode]);

    return (
        <div className='cart'>
            <main>
                {cartItems.map((item, index) => (
                    <CartItem key={index} cartItem={item} />
                ))}
            </main>
            <aside>
                <p>Subtotal: ₹{subtotal}</p>
                <p>Shipping Charges: ₹{shippingCharges}</p>
                <p>Tax: ₹{tax}</p>
                <p>
                    Discount: <em className="red"> - ₹{discount}</em>
                </p>
                <p>
                    <b>Total: ₹{total}</b>
                </p>
                <input
                    type="text"
                    placeholder="Coupon Code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                />
                {couponCode &&
                    (isValidCouponCode ? (
                        <span className="green">
                            ₹{discount} off using the <code>{couponCode}</code>
                        </span>
                    ) : (
                        <span className="red">
                            Invalid Coupon <RiErrorWarningFill />
                        </span>
                    ))}

                {cartItems.length > 0 && <Link to="/shipping">Checkout</Link>}
            </aside>
        </div>
    )
}

export default Cart