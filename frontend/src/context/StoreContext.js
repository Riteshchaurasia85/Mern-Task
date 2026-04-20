import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

import { toast } from 'react-toastify';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('userInfo')) || null);
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/api/products');
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const addToCart = (product) => {
        setCartItems(prev => {
            const exists = prev.find(item => item._id === product._id);
            if (exists) {
                return prev.map(item => item._id === product._id ? { ...item, qty: item.qty + 1 } : item);
            }
            return [...prev, { ...product, qty: 1 }];
        });
        toast.success(`${product.name} added to cart!`);
    };


    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(item => item._id !== id));
    };

    const logout = () => {
        localStorage.removeItem('userInfo');
        setUser(null);
    };

    return (
        <StoreContext.Provider value={{
            cartItems, addToCart, removeFromCart,
            user, setUser, logout,
            products
        }}>
            {children}
        </StoreContext.Provider>
    );
};
