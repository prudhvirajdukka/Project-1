import React from 'react';
import './Styles/Cart.css';

export default function Cart({ isOpen, items, onClose, onDismiss }) {
  if (!isOpen) return null;
  const total = items.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="cart-overlay">
      <div className="cart-content">
        <h2>Your Cart</h2>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((p,i) => (
              <tr key={i}>
                <td><img src={p.image} alt={p.title} /></td>
                <td>{p.title}</td>
                <td>${p.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="total">Total: ${total.toFixed(2)}</p>
        <div className="buttons">
          <button onClick={onClose}>Close</button>
          <button onClick={onDismiss}>Dismiss</button>
        </div>
      </div>
    </div>
  );
}
