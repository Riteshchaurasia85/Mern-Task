const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);
require('dotenv').config();

const mongoose = require('mongoose');
const Product = require('./model/productModel');

const products = [
    {
        name: 'Aura Wireless Headphones',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
        description: 'Experience pure sound with active noise cancellation and 40-hour battery life.',
        category: 'Electronics',
        price: 299,
        countInStock: 10
    },
    {
        name: 'Lumina Smart Watch',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
        description: 'Stay connected and track your health with the most advanced wearable.',
        category: 'Electronics',
        price: 199,
        countInStock: 15
    },
    {
        name: 'Zenith Mechanical Keyboard',
        image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&q=80',
        description: 'Tactile precision with customizable RGB lighting and premium switches.',
        category: 'Accessories',
        price: 149,
        countInStock: 8
    },
    {
        name: 'Nova Leather Backpack',
        image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=500&q=80',
        description: 'Handcrafted premium leather backpack for the modern traveler.',
        category: 'Fashion',
        price: 129,
        countInStock: 12
    },
    {
        name: 'Minimalist Desk Lamp',
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed657f9971?w=500&q=80',
        description: 'Sleek design with adjustable brightness and wireless charging base.',
        category: 'Home Office',
        price: 79,
        countInStock: 20
    }
];

mongoose.connect(process.env.MONGODB_URI).then(async () => {
    console.log("Connected to MongoDB for seeding...");
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("Products seeded successfully!");
    process.exit();
}).catch(err => {
    console.error(err);
    process.exit(1);
});
