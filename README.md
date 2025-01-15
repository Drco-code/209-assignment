
# E-Commerce Website

![Group Picture](https://github.com/user-attachments/assets/9cedb14a-5b02-4433-b955-3605af10d903)(group_picture.jpg)  
*Insert a group picture of all team members here.*

---

## Table of Contents
1. [Introduction](#introduction)
2. [Market Selection](#market-selection)
3. [Features](#features)
4. [Technical Requirements](#technical-requirements)
5. [How to Run the Application](#how-to-run-the-application)
6. [Screenshots](#screenshots)
7. [Documentation](#documentation)
8. [Contributors](#contributors)

---

## Introduction
This project is a fully functional e-commerce website designed to demonstrate the principles of a **competitive market**. The platform allows users to browse products, add items to their cart, and simulate payment processing. It also includes an admin dashboard for managing products, users, and orders.

---

## Market Selection
We have chosen a **monopolistic/competitive market** for our e-commerce platform.  
**Key Characteristics:**
- **Competitive Market**: Many sellers, similar products, and price competition.

*Provide a detailed explanation of your chosen market type and how it aligns with your e-commerce platform.*

---

## Features
### Core Functionalities
1. **User Authentication**: Registration, login, and logout mechanisms.
2. **Product Listings**: Display products with detailed descriptions, pricing, and categorization.
3. **Shopping Cart**: Add, update, and remove items from the cart.
4. **Payment Integration**: Simulate payment processing functionality.
5. **Responsive Design**: Seamless performance on mobile, tablet, and desktop devices.
6. **Admin Dashboard**: Manage products, user accounts, and order statuses.

---

## Technical Requirements
### Front-End
- Built using **React**.
- Responsive design for mobile, tablet, and desktop.
- Libraries used: React Router, Axios, Bootstrap.

### Back-End
- Built using **Django**.
- RESTful API for handling frontend requests.
- Libraries used: Django REST Framework, Django CORS Headers.

### Database
- **sqlite3** for storing user data, product details, and order information.

### Code Documentation
- Comprehensive documentation included in the `/docs` folder.
- Setup instructions and technical details provided below.

---

## How to Run the Application
### Prerequisites
- Node.js (v18 or higher)
- Python (v3.9 or higher)
- npm (v9 or higher)
- pip (v22 or higher)

### Installation Steps
1. Clone the repository:
   ```bash
   $ git clone https://github.com/Drco-code/209-assignment.git

(NOTE: your need to mention your own stripe secret api key and publishable key in django to run the project)

2. Running Backend:
   ```bash
   $ cd backend

   $ $ pip install -r requirements.txt`

   $ py manage.py migrate

   $ py manage.py runserver


3. Running Frontend
   ```bash

      $ cd frontend

      $npm install

      $npm run dev
