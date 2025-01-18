### Assignment12_Category_0003

# Tourism Management System

## Live URL :

# Tourist Guide Site - Server

🚩: 0 [If we have any update we will mention it here]. Do check frequently to see if any updates have been made.

## Overview

This is the server-side implementation of the Tourist Guide site. It provides the backend functionality to support the client-side features, including handling user authentication, managing data, and
providing APIs for various operations.

## Features

-   **User Authentication**: Register, login, password reset, Google login, and token-based authentication.
-   **Authorization**: Role-based access control for different user roles (Tourist, Tour Guide, Admin).
-   **CRUD Operations**: Create, read, update, and delete functionalities for packages, tours, and stories.
-   **Secure Environment**: Use environment variables to hide sensitive information like Firebase config keys and MongoDB credentials.
-   **Data Fetching**: Implement Tanstack query for all GET methods.
-   **Notifications**: Show sweet alerts/toasts for all CRUD operations and successful login/signup.

## Key Rules

-   **GitHub Commits**: Minimum of 12 notable commits on the server side and 20 on the client side.
-   **No Lorem Ipsum**: Use meaningful content instead of placeholder text.
-   **Private Routes**: Ensure users are not redirected to the login page after reloading a private route.

## API Endpoints

### Authentication

-   **Register**: `POST /api/auth/register` - Register a new user.
-   **Login**: `POST /api/auth/login` - Authenticate a user and generate a token.
-   **Google Login**: `POST /api/auth/google` - Authenticate a user via Google.
-   **Password Reset**: `POST /api/auth/forgot-password` - Initiate a password reset process.

### Users

-   **Get User Profile**: `GET /api/users/:id` - Get the profile of a specific user.
-   **Update User Profile**: `PUT /api/users/:id` - Update the profile of a specific user.

### Packages

-   **Get All Packages**: `GET /api/packages` - Retrieve all packages.
-   **Get Package Details**: `GET /api/packages/:id` - Retrieve details of a specific package.
-   **Create Package**: `POST /api/packages` - Create a new package (Admin only).
-   **Update Package**: `PUT /api/packages/:id` - Update a specific package (Admin only).
-   **Delete Package**: `DELETE /api/packages/:id` - Delete a specific package (Admin only).

### Tours

-   **Get All Tours**: `GET /api/tours` - Retrieve all tours.
-   **Get Tour Details**: `GET /api/tours/:id` - Retrieve details of a specific tour.
-   **Create Tour**: `POST /api/tours` - Create a new tour.
-   **Update Tour**: `PUT /api/tours/:id` - Update a specific tour.
-   **Delete Tour**: `DELETE /api/tours/:id` - Delete a specific tour.

### Stories

-   **Get All Stories**: `GET /api/stories` - Retrieve all stories.
-   **Get Story Details**: `GET /api/stories/:id` - Retrieve details of a specific story.
-   **Create Story**: `POST /api/stories` - Create a new story.
-   **Update Story**: `PUT /api/stories/:id` - Update a specific story.
-   **Delete Story**: `DELETE /api/stories/:id` - Delete a specific story.

## Technology Stack

-   **Backend**: [Node.js, Express]
-   **Database**: MongoDB
-   **Authentication**: Firebase
-   **Others**: SweetAlert2, Tanstack Query

## Env Variables

To run this project, you will need to add the following environment variables to your `.env` file:

## Table of Contents:

    -   Features
    -   Technologies
    -   Getting Started
    -   Setup
    -   Environment Variables
    -   API Endpoints
    -   Authentication
    -   License
    -   Contributing

## Technologies:

    -   Node.js
    -   Express.js
    -   MongoDB (for storing visa data and applications)
    -   Firebase for user authentication
    -   JSON Web Tokens (JWT) for authentication
    -   Axios for HTTP requests

## Getting Started

### Prerequisites

-   Node.js and npm installed on your machine.
-   Modern web browser (Chrome/Edge) with support for the Web Speech API.

### Prerequisites

-   Node.js and npm installed on your machine.
-   Modern web browser (Chrome/Edge) with support for the Web Speech API.

### Installation

1. Clone the repository: `https://github.com/Programming-Hero-Web-Course4/b10a12-server-side-DeveloperMonirBD.git`, `cd b10a12-server-side`

2. Install the dependencies: `bash npm install `

3. Start the development server:

`bash npm start `

4. Open your browser and navigate to

`.........` to view the application.

## What to Submit

Assignment Category: Tourism Management System - 0003

Your client-side code GitHub repository link : https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-DeveloperMonirBD

Your server-side code GitHub repository link: https://github.com/Programming-Hero-Web-Course4/b10a12-server-side-DeveloperMonirBD

Live link to the deployed project :

**Enjoy exploring the beautiful landscapes and cultures of Bangladesh with the Tourist Guide site!**

If you encounter any issues or need help, feel free to reach out.
