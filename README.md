# E-commerce Backend API

A complete Node.js / Express backend for an E-commerce application.

## Folder Structure

- `config/` - Configuration files (e.g., database connection)
- `controllers/` - Logic for route handlers (auth, orders, products)
- `middleware/` - Custom middleware functions (authentication, admin checks)
- `models/` - Mongoose database models (User, Product, Order)
- `routes/` - API route definitions
- `server.js` - Main entry point

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory based on `.env.example` and add your variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

3. Start the server:
   - For development (with nodemon): `npm run dev`
   - For production: `npm start`

## API Routes

### Authentication
- `POST /api/auth/register` - Register a new user (Public)
- `POST /api/auth/login` - Authenticate user & get token (Public)

### Products
- `GET /api/products` - Get all products (Public)
- `GET /api/products/:id` - Get single product by ID (Public)
- `POST /api/products` - Create a product (Protected, Admin Only)
- `PUT /api/products/:id` - Update a product (Protected, Admin Only)
- `DELETE /api/products/:id` - Delete a product (Protected, Admin Only)

### Orders
- `POST /api/orders` - Create a new order (Protected)
- `GET /api/orders/myorders` - Get logged in user's orders (Protected)
- `GET /api/orders` - Get all orders (Protected, Admin Only)
- `PUT /api/orders/:id/status` - Update order status (Protected, Admin Only)
