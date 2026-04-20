# Luminex - MERN E-commerce Application

A premium, modern e-commerce application built with the MERN stack (MongoDB, Express, React, Node.js).

## Features
- **User Authentication:** Secure signup and login using JWT and Bcrypt.
- **Product Management:** Dynamic product fetching from MongoDB Atlas.
- **Shopping Cart:** Add, remove, and manage quantities of products in the cart.
- **Premium UI:** Glassmorphic design with smooth animations and toast notifications.
- **Responsive Design:** Works beautifully on all screen sizes.

## Tech Stack
- **Frontend:** React.js, React Router, Context API, Axios, React-Toastify.
- **Backend:** Node.js, Express.js.
- **Database:** MongoDB Atlas (Mongoose).
- **Styling:** Modern CSS with glassmorphism effects.

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB Atlas account

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   ```

2. **Install Backend Dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Setup:**
   Create a `.env` file in the `backend` directory and add:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

5. **Run the Application:**
   - Start Backend: `cd backend && nodemon server.js`
   - Start Frontend: `cd frontend && npm start`

## License
MIT
