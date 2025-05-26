import React, { useEffect } from 'react';
import './Styles/Modal.css';

export default function Modal({ isOpen, onClose, product }) {
  useEffect(() => {
    const esc = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', esc);
    return () => document.removeEventListener('keydown', esc);
  }, [onClose]);

  if (!isOpen || !product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <img src={product.image} alt="" />
        <h2>{product.title}</h2>
        <p>${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
