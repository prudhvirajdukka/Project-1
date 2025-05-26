import React from 'react';
import './Styles/ProductCard.css';

export default function ProductCard({ product, onAdd, onBuy }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p className="desc">{product.description.slice(0, 80)}…</p>
      <p className="price">${product.price.toFixed(2)}</p>
      <div className="actions">
        <button onClick={() => onAdd(product)}>Add to Cart</button>
        <button onClick={() => onBuy(product)}>Buy</button>
      </div>
    </div>
  );
}
