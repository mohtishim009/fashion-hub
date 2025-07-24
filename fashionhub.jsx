// fashionhub/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;

// fashionhub/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">FashionHub</Link>
      <div className="nav-links">
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
}

export default Navbar;

// fashionhub/src/components/ProductCard.js
import React from 'react';
import './ProductCard.css';

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;

// fashionhub/src/pages/Home.js
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import './Home.css';

const sampleProducts = [
  {
    id: 1,
    name: 'Classic T-Shirt',
    price: 20,
    image: 'https://via.placeholder.com/200x250?text=T-Shirt'
  },
  {
    id: 2,
    name: 'Hoodie',
    price: 40,
    image: 'https://via.placeholder.com/200x250?text=Hoodie'
  },
  {
    id: 3,
    name: 'Denim Jacket',
    price: 60,
    image: 'https://via.placeholder.com/200x250?text=Jacket'
  }
];

function Home() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  return (
    <div className="home">
      <h1>New Arrivals</h1>
      <div className="products">
        {sampleProducts.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Home;

// fashionhub/src/pages/Cart.js
import React from 'react';

function Cart() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Your Cart</h2>
      <p>Cart functionality will be added with global state (like Redux or Context).</p>
    </div>
  );
}

export default Cart;

// fashionhub/src/pages/Checkout.js
import React from 'react';

function Checkout() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Checkout</h2>
      <p>Checkout and payment processing will be implemented using Stripe.</p>
    </div>
  );
}

export default Checkout;

// fashionhub/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
