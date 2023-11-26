import React from 'react';

function ProductCard({ product }) {
  return (
    <div className='product-card'>
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
