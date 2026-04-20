import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartItems, removeFromCart, addToCart } = useContext(StoreContext);

    const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

    return (
        <div className="container" style={{ padding: '40px 0' }}>
            <h2 style={{ fontSize: '36px', marginBottom: '30px' }}>Your Cart</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: cartItems.length > 0 ? '1fr 350px' : '1fr', gap: '40px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {cartItems.length === 0 ? (
                        <div className="glass" style={{ padding: '60px', textAlign: 'center' }}>
                            <p style={{ color: 'var(--text-muted)', fontSize: '18px', marginBottom: '20px' }}>Your cart is empty</p>
                            <Link to="/" className="glass" style={{ padding: '10px 25px', background: 'var(--primary)', color: 'white' }}>Continue Shopping</Link>
                        </div>
                    ) : (
                        cartItems.map(item => (
                            <div key={item._id} className="glass" style={{ padding: '20px', display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', borderRadius: '12px', objectFit: 'cover' }} />
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: '18px' }}>{item.name}</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>{item.category}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <span style={{ fontSize: '18px', fontWeight: '700' }}>₹{item.price}</span>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '5px' }}>
                                        <button onClick={() => removeFromCart(item._id)} style={{ background: 'none', color: 'white', fontSize: '20px' }}>-</button>
                                        <span>{item.qty}</span>
                                        <button onClick={() => addToCart(item)} style={{ background: 'none', color: 'white', fontSize: '20px' }}>+</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="glass" style={{ padding: '30px', height: 'fit-content' }}>
                        <h3 style={{ marginBottom: '20px' }}>Order Summary</h3>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', color: 'var(--text-muted)' }}>
                            <span>Subtotal</span>
                            <span>₹{total.toFixed(2)}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontSize: '20px', fontWeight: '800' }}>
                            <span>Total</span>
                            <span style={{ color: 'var(--secondary)' }}>₹{total.toFixed(2)}</span>
                        </div>
                        <button style={{ 
                            width: '100%', 
                            padding: '15px', 
                            background: 'linear-gradient(to right, var(--primary), var(--secondary))', 
                            color: 'white', 
                            borderRadius: '12px',
                            fontWeight: '800',
                            fontSize: '16px'
                        }}>
                            PROCEED TO CHECKOUT
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
