import React, { useState, useEffect } from 'react';
import ProductCard from '../component/ProductCard';
import './ProductAll.css'; 

const ProductAll = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    try {
      let url = 'http://localhost:3001/products';
      let response = await fetch(url);
      let data = await response.json();
      setProductList(data);
    } catch (error) {
      console.error('JSON 파싱 실패 ❌:', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="product-list">
      {productList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductAll;
