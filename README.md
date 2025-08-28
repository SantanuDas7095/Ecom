# Herritage Hub 🛍️

## About the Project

This is a full-stack e-commerce platform built to support and showcase the unique arts and crafts from the Northeast region of India. The platform is developed using the **MERN stack** (MongoDB, Express.js, React, Node.js) and is deployed on **Vercel**. It provides a complete solution for both customers to browse and purchase products, and for administrators to manage the store.

## Features ✨

### Customer Features
- **Product Discovery:** Intuitive browsing, searching, and filtering of products.
- **Secure Authentication:** User registration and login for a personalized shopping experience.
- **Shopping Cart:** Add, remove, and manage products in your cart before checkout.
- **Responsive Design:** A seamless user interface across all devices (mobile, tablet, and desktop).
-  **Order Management**: Track order history and status

### Admin Features
- **Dashboard:** A centralized panel to oversee store performance.
- **Product Management:** Full CRUD (Create, Read, Update, Delete) functionality for product listings.
- **Order Management:** Track and update the status of customer orders.
- **User Management:** View and manage user accounts.

## Technologies Used 💻

### Frontend
* **React:** For building a dynamic, single-page application.
* **React Router:** For efficient client-side routing.
* **Axios** - HTTP client for API requests
* **CSS/SCSS:** For styling and design.

### Backend
* **Node.js:** The server-side runtime environment.
* **Express.js:** The framework for building the RESTful API.
* **MongoDB:** The NoSQL database for flexible data storage.
* **Mongoose:** The ODM for interacting with MongoDB.

### Deployment
* **Vercel:** For a smooth, integrated deployment of both frontend and backend.
* **MongoDB Atlas:** A cloud-hosted database service.

## Getting Started 🚀

### Prerequisites
Make sure you have the following installed:
* Node.js (LTS version)
* npm
* Git

### Local Setup
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/SantanuDas7095/Ecommerce](https://github.com/SantanuDas7095/Ecommerce)
    cd your-repository-name
    ```
2.  **Install dependencies for the frontend:**
    ```bash
    cd frontend
    npm install
    npm install react-router-dom react-toastify
    ```
3.  **Install dependencies for the backend:**
    ```bash
    cd backend
    npm init
    npm i cors dotenv express jsonwebtoken mongoose multer nodemon stripe validator cloudinary bcrypt
    ```
4.  **Install dependencies for the admin:**
    ```bash
    cd admin
    npm install
    npm install axios react-router-dom react-toastify
    ```
5.  **Configure environment variables for frontend:**
    * Create a `.env` file in the `frontend` directory.
    * Add your MongoDB connection string and a secret key:
        ```env
        VITE_BACKEND_URL = 'http://localhost:4000'
        ```    
6.  **Configure environment variables for backend:**
    * Create a `.env` file in the `backend` directory.
    * Add your MongoDB connection string and a secret key:
        ```env
        MONGODB_URI = "your_mongodb_atlas_connection_string"
        CLOUDINARY_API_KEY = "your_cloudinary_api_key"
        CLOUDINARY_SECRET_KEY = "your_secret_key"
        CLOUDINARY_NAME = "your_cloudinary_name"
        JWT_SECRET = "your_jwt_secret_key"
        ADMIN_EMAIL = "admin_email"
        ```
7.  **Configure environment variables for admin:**
    * Create a `.env` file in the `admin` directory.
    * Add your MongoDB connection string and a secret key:
        ```env
        VITE_BACKEND_URL = 'http://localhost:4000'
        ```            
8.  **Run the application:**
    * In the `backend` directory, run:
        ```bash
        npm start server
        ```
    The application-backend will be live at `http://localhost:4000`.

    * In a new terminal, in the `frontend` directory, run:
        ```bash
        npm run dev
        ```
    The application will be live at `http://localhost:5173`.

    * In a new terminal, in the `frontend` directory, run:
        ```bash
        npm run dev
        ```
    The application-admin will be live at `http://localhost:5174`.

## Deployment on Vercel 🌐

Vercel offers an easy way to deploy MERN applications by recognizing both the frontend and backend.

1.  Connect your GitHub repository to your Vercel account.
2.  Vercel will automatically detect the React app in the `frontend` directory and the Node.js API in the `backend` directory.
3.  Ensure you have added your environment variables (like `MONGO_URI` and `JWT_SECRET`) to your Vercel project settings.

## Contributing 🙏

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/SantanuDas7095/Ecommerce/issues).

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'feat: Add a new feature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## License 📜

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact 📧

* Santanu Das
* Email : santanudas8506@gmail.com
* **Github :** [Github](https://github.com/SantanuDas7095)
* **Linkedin :** [Linkedin](https://www.linkedin.com/in/santanu-das123)

Project Link: [Heritage HUB](https://heritage-hub-f.vercel.app/)