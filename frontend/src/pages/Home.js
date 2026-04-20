import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import ProductCard from '../component/ProductCard';

const Home = () => {
    const { products } = useContext(StoreContext);

    return (
        <div className="container">
            <header style={{ textAlign: 'center', padding: '60px 0' }}>
                <h1 style={{ fontSize: '48px', marginBottom: '10px' }}>Elevate Your Style</h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>Premium products for a modern lifestyle.</p>
            </header>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '30px',
                paddingBottom: '60px'
            }}>
                {products.length > 0 ? (
                    products.map(product => (
                        <ProductCard key={product._id} product={product} />
                    ))
                ) : (
                    <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px' }}>
                        <p style={{ color: 'var(--text-muted)' }}>No products found. Please seed the database.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
