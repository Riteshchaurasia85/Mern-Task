import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { StoreContext } from '../context/StoreContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(StoreContext);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:5000/api/users/login', { email, password });
            localStorage.setItem('userInfo', JSON.stringify(data));
            setUser(data);
            toast.success("Welcome back!");
            navigate('/');
        } catch (error) {
            toast.error(error.response?.data?.message || "Login failed");
        }
    };


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
            <div className="glass" style={{ padding: '40px', width: '100%', maxWidth: '400px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '28px' }}>Welcome Back</h2>
                <form onSubmit={submitHandler} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--text-muted)' }}>Email Address</label>
                        <input 
                            type="email" 
                            className="glass" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', color: 'white' }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--text-muted)' }}>Password</label>
                        <input 
                            type="password" 
                            className="glass" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', color: 'white' }}
                        />
                    </div>
                    <button type="submit" style={{ 
                        marginTop: '10px',
                        padding: '12px', 
                        background: 'var(--primary)', 
                        color: 'white', 
                        borderRadius: '8px',
                        fontWeight: '600',
                        fontSize: '16px'
                    }}>
                        Sign In
                    </button>
                </form>
                <p style={{ textAlign: 'center', marginTop: '20px', color: 'var(--text-muted)' }}>
                    Don't have an account? <Link to="/register" style={{ color: 'var(--secondary)', fontWeight: '600' }}>Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
