import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(StoreContext);

    return (
        <div className="glass" style={{
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            transition: 'transform 0.3s ease',
            height: '100%'
        }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
           onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            
            <div style={{
                width: '100%',
                height: '200px',
                borderRadius: '12px',
                overflow: 'hidden',
                background: '#1e293b'
            }}>
                <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div>
                <span style={{ fontSize: '12px', color: 'var(--secondary)', fontWeight: '600', textTransform: 'uppercase' }}>{product.category}</span>
                <h3 style={{ fontSize: '18px', margin: '5px 0' }}>{product.name}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px', height: '40px', overflow: 'hidden' }}>{product.description}</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                <span style={{ fontSize: '20px', fontWeight: '800', color: 'var(--primary)' }}>₹{product.price}</span>
                <button 
                    onClick={() => addToCart(product)}
                    style={{
                        padding: '10px 20px',
                        background: 'var(--primary)',
                        color: 'white',
                        borderRadius: '8px',
                        fontWeight: '600'
                    }}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
