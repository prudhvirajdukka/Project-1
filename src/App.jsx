import React, { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import Modal from './components/Modal';
import Cart from './components/Cart';
import Spinner from './components/Spinner';

function App() {
  const [products, setProducts] = useState([]);
  const [loading,  setLoading]  = useState(true);
  const [error,    setError]    = useState(null);
  const [cart,     setCart]     = useState([]);
  const [modalProd, setModalProd] = useState(null);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(json => setProducts(json))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const addToCart = (p) => setCart((c) => [...c, p]);
  const buyNow   = (p) => setModalProd(p);
  const closeModal = () => setModalProd(null);
  const closeCart  = () => setCartOpen(false);
  const dismissCart = () => setCart([]);  
  const [cartOpen, setCartOpen] = useState(false);
  const openCart = () => setCartOpen(true);
  if (loading) return <Spinner />;
  if (error)   return <p style={{ textAlign:'center', color:'red' }}>Error: {error}</p>;

  return (
    <div className="container">
      <h1 className="title">Product Store</h1>
      <button onClick={openCart} style={{ marginBottom: '1rem' }}><b>Cart</b> ({cart.length})</button>

      <div className="grid">
        {products.map(p => (
          <ProductCard
            key={p.id}
            product={p}
            onAdd={addToCart}
            onBuy={buyNow}
          />
        ))}
      </div>

      <Modal isOpen={!!modalProd} onClose={closeModal} product={modalProd} />
      <Cart
        isOpen={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onDismiss={dismissCart}
      />
    </div>
  );
}

export default App;
