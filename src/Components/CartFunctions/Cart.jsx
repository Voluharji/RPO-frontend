import './Cart.css';
import React, {useContext, useState} from 'react';
import {CartContext} from './CartFunctions.jsx';
import Test from '../../Pages/Homepage/HomepageAssets/nekiNeki.jpg'

export default function Cart() {

    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext);

    return (
        <div className="shopping-cart">
            {cartItems.length > 0 ? (
                <>
                    <div className="cart-details">
                        <div className="cart-header">
                            <h2>Shopping Cart</h2>
                            <h2>{cartItems.length} Items</h2>
                        </div>
                        <div className="cart-items">
                            {cartItems.map((item) => (
                                <div key={item.productId} className="cart-item">
                                    <img src={Test} alt={item.name} className="item-image" />
                                    <div className="item-details">
                                        <h4>{item.name}</h4>
                                        <p>Price:  €{item.price.toFixed(2)}</p>
                                    </div>
                                    <div className="item-quantity">
                                        <button onClick={() => removeFromCart(item)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => addToCart(item)}>+</button>
                                    </div>
                                    <div className="item-total">
                                        <p> €{(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="total-cost">
                        <h3>Total Cost</h3>
                        <h3>€{getCartTotal().toFixed(2)}</h3>
                    </div>
                </>
            ) : (
                <div className="empty-cart">
                    <h2>Your cart is empty</h2>
                    <p>Looks like you haven't added anything to your cart yet.</p>
                </div>
            )}
        </div>
    );
}