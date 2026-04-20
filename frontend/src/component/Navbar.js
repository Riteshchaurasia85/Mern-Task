import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const Navbar = () => {
    const { cartItems, user, logout } = useContext(StoreContext);

    return (
        <nav className="glass" style={{
            position: 'sticky',
            top: '20px',
            margin: '20px auto',
            maxWidth: '1100px',
            padding: '15px 30px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 1000
        }}>
            <Link to="/" style={{ fontSize: '24px', fontWeight: '800', background: 'linear-gradient(to right, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                LUMINEX
            </Link>

            <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                <Link to="/" style={{ fontWeight: '500' }}>Home</Link>
                <Link to="/cart" style={{ fontWeight: '500', position: 'relative' }}>
                    Cart
                    {cartItems.length > 0 && (
                        <span style={{
                            position: 'absolute',
                            top: '-10px',
                            right: '-15px',
                            background: 'var(--secondary)',
                            color: 'white',
                            borderRadius: '50%',
                            padding: '2px 6px',
                            fontSize: '10px'
                        }}>{cartItems.reduce((acc, item) => acc + item.qty, 0)}</span>
                    )}
                </Link>
                {user ? (
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Hello, {user.username}</span>
                        <button onClick={logout} className="glass" style={{ padding: '8px 16px', background: 'transparent', color: 'var(--text-main)' }}>Logout</button>
                    </div>
                ) : (
                    <Link to="/login" className="glass" style={{ padding: '8px 20px', background: 'var(--primary)', border: 'none', color: 'white' }}>Login</Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
