import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

/* ---------- Pages ---------- */

function Home() {
  return (
    <div>
      <h2>Welcome to Sweet Delights</h2>
      <p>Freshly baked happiness in every bite 🍪</p>
    </div>
  );
}

function Menu() {
  return (
    <div>
      <h2>Our Dessert Menu</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>🍫 Chocolate Lava Cake</li>
        <li>🍓 Strawberry Cheesecake</li>
        <li>🧁 Vanilla Cupcakes</li>
        <li>🍨 Ice Cream Sundaes</li>
        <li>🥐 French Pastries</li>
      </ul>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About Sweet Delights</h2>
      <p>
        We are a family-owned bakery serving handcrafted desserts made with
        love, premium ingredients, and a sprinkle of joy since 2015.
      </p>
    </div>
  );
}

function Gallery() {
  return (
    <div>
      <h2>Dessert Gallery</h2>
      <p>Take a look at our delicious creations 🍰📸</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>Email: hello@sweetdelights.com</p>
      <p>Phone: +91 98765 43210</p>
    </div>
  );
}

function Order() {
  return (
    <div>
      <h2>Place an Order</h2>
      <p>Online ordering coming soon! Stay sweet 🍩</p>
    </div>
  );
}

/* ---------- App ---------- */

export default function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#FFF8F2",
          minHeight: "100vh",
        }}
      >
        <header
          style={{
            backgroundColor: "#FF6F61",
            color: "white",
            padding: "15px",
          }}
        >
          <h1>SWEET DELIGHTS BAKERY 🍰</h1>
          <nav>
            <Link to="/" style={linkStyle}>
              Home
            </Link>
            <Link to="/menu" style={linkStyle}>
              Menu
            </Link>
            <Link to="/about" style={linkStyle}>
              About
            </Link>
            <Link to="/gallery" style={linkStyle}>
              Gallery
            </Link>
            <Link to="/contact" style={linkStyle}>
              Contact
            </Link>
            <Link to="/order" style={orderBtnStyle}>
              Order Now
            </Link>
          </nav>
        </header>

        <div style={{ padding: "30px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </div>

        <footer
          style={{
            backgroundColor: "#333",
            color: "white",
            padding: "10px",
            marginTop: "20px",
          }}
        >
          © 2026 Sweet Delights Bakery
        </footer>
      </div>
    </BrowserRouter>
  );
}

/* ---------- Styles ---------- */

const linkStyle = {
  color: "white",
  margin: "0 15px",
  textDecoration: "none",
  fontWeight: "bold",
};

const orderBtnStyle = {
  ...linkStyle,
  backgroundColor: "white",
  color: "#FF6F61",
  padding: "5px 10px",
  borderRadius: "5px",
};
