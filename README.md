# 🍽️ Bitelt – React Food Ordering Website

Bitelt is a modern and responsive food ordering platform built with **React** and **Tailwind CSS**. It supports user authentication, cart functionality, order placement, and an admin dashboard — all using `localStorage` to simulate backend behavior.

---

## 🌟 Features

### 👤 User

* Login / Signup
* Dark & Light mode support
* View menu and add items to cart
* Modify item quantities in cart
* Place orders with total billing
* View "My Orders" with live status
* Order confirmation popup

### 🛒 Cart

* Cart is user-specific (stored as `cart_<email>` in localStorage)
* Quantity adjustment and item removal
* Total price calculation
* Order placement with `status = Pending`

### 🧑‍🏫 Admin

* Role-based Admin Dashboard
* Manage Products (edit/delete food items)
* Manage Orders (view, change status, delete)
* View username, items, date, and total per order

### 💡 UI/UX

* Responsive design using **Tailwind CSS**
* Fully mobile-compatible navbar
* Theme toggle (Dark / Light)
* Animated popups and dropdowns

---

## 📁 Folder Structure

```
src/
🔹 assets/             # Images and logo
🔹 components/         # Navbar, Footer, etc.
🔹 context/            # AuthContext, CartContext
🔹 pages/
│   🔹 Home.jsx
│   🔹 Menu.jsx
│   🔹 Cart.jsx
│   🔹 Login.jsx
│   🔹 Signup.jsx
│   🔹 MyOrders.jsx
│   🔹 AdminDashboard.jsx
│   🔹 ManageOrders.jsx
│   └️ ManageProducts.jsx
🔹 App.jsx
└️ main.jsx
```

---

## 🔧 Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yashvanthh/bitelt.git
   cd bitelt
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```


## 🦚 Admin Login Info (Hardcoded in localStorage)

To test the admin dashboard, sign up a user and set `isAdmin` manually in browser devtools:

```js
let users = JSON.parse(localStorage.getItem("users"));
users[0].isAdmin = true;
users[0].role = "admin";
localStorage.setItem("users", JSON.stringify(users));
```

---

## 🛠️ Built With

* **React** – Frontend Library
* **Tailwind CSS** – Utility-first CSS
* **React Router DOM** – Page routing
* **localStorage** – For user, cart, and order persistence

---

## 📜 License

This project is for learning/demo purposes. You are free to modify and use it in your portfolio.

---

## 👨‍💼 Author

Developed with ❤️ by Yashvanth M R

---

## 🌐 Live Demo

[🔗 Click Here to View Live](https://biteit-c0530.web.app)

---
