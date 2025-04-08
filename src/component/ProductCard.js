import React from 'react';
import './ProductCard.css'; 

const ProductCard = ({ product }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW',
    }).format(price);
  };

  return (
    <div className="product-card">
      <img
        src={product.img}
        alt={product.title}
        className="product-image"
      />
      {product.choice && <div className="product-badge">Conscious Choice</div>}
      <div className="product-title">{product.title}</div>
      <div className="product-price">{formatPrice(product.price)}</div>
      {product.new && <div className="product-new">신제품</div>}
    </div>
  );
};

export default ProductCard;
