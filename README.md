E-Commerce Platform

A full-stack e-commerce web application built with modern web technologies to provide a seamless online shopping experience.

https://img.shields.io/badge/E--Commerce-Platform-blue
https://img.shields.io/badge/React-18.2.0-blue
https://img.shields.io/badge/Node.js-Express-green
https://img.shields.io/badge/MongoDB-Database-green

Features

User Features

User Authentication: Secure registration and login system

Product Browsing: Intuitive product catalog with categories and filters

Search Functionality: Advanced search with auto-suggestions

Shopping Cart: Persistent cart across sessions

Wishlist: Save favorite items for later

Order Management: Track order history and status

Product Reviews: Rate and review purchased items

Admin Features

Dashboard: Comprehensive sales and inventory overview

Product Management: Add, edit, and manage products

Inventory Management: Track and update stock levels

Order Management: Process and update order statuses

User Management: View and manage customer accounts

Payment & Security

Secure Checkout: Multiple payment gateway integration

SSL Encryption: Secure data transmission

Data Protection: User privacy and data security measures

Tech Stack

Frontend

React - User interface framework

Redux - State management

Bootstrap/Material-UI - Component library and styling

Axios - HTTP client for API requests

Backend

Node.js - Runtime environment

Express.js - Web application framework

JWT - Authentication tokens

BCrypt - Password hashing

Database

MongoDB - NoSQL database

Mongoose - Object Data Modeling (ODM) library

Deployment

Frontend: Vercel

Backend: Vercel

Database: MongoDB Atlas

Storage: Cloudinary

Installation

Prerequisites

Node.js (v14 or higher)

MongoDB (local or Atlas cluster)

npm or yarn package manager

Setup Instructions

Clone the repository

bash
git clone https://github.com/SantanuDas7095/Ecom.git
cd Ecom
Install backend dependencies

bash
cd backend
npm install
Install frontend dependencies

bash
cd ../frontend
npm install
Environment Configuration

Create a .env file in the backend directory:

text
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
Start the development servers

Backend (from backend directory):

bash
npm run dev
Frontend (from frontend directory):

bash
npm start
Access the application

Frontend: http://localhost:5173

Backend API: http://localhost:4000

Usage
Browse Products: Visit the homepage to explore featured products

Create Account: Register to access full features

Add to Cart: Select products and quantities

Checkout: Complete purchase with secure payment

Track Orders: View order history in user dashboard

API Endpoints

Method	Endpoint	Description

POST	/api/users/register	User registration
POST	/api/users/login	User authentication
GET	/api/products	Get all products
GET	/api/products/:id	Get single product
POST	/api/orders	Create new order
GET	/api/orders/:id	Get order details
GET	/api/users/profile	Get user profile

Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

License

This project is licensed under the MIT License - see the LICENSE file for details.

Contact
Santanu Das - GitHub - santanudas8506@gmail.com

Project Link: https://github.com/SantanuDas7095/Ecom

Acknowledgments

Icons from Font Awesome

UI inspiration from modern e-commerce platforms

MongoDB for database services

React community for excellent components and libraries