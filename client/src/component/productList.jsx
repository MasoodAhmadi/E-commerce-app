import React from 'react';
import ProductCard from './productCard';
import { products } from '../data/product';

function ProductList() {
  return (
    <div className='container'>
      <div className='product-list'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
