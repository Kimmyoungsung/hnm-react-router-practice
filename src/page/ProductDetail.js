import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    try {
      let url = `https://my-json-server.typicode.com/Kimmyoungsung/hnm-react-router-practice/products/${id}`;
      let response = await fetch(url);
      let data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("제품 정보 가져오기 실패 ❌", error);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW',
    }).format(price);
  };

  useEffect(() => {
    getProductDetail();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail-container">
      <img
        className="product-detail-image"
        src={product.img}
        alt={product.title}
      />
      <div className="product-detail-info">
        <div>
          {product.choice && <div className="product-detail-badge">Conscious Choice</div>}
          <div className="product-detail-title">{product.title}</div>
          <div className="product-detail-price">{formatPrice(product.price)}</div>
          {product.new && <div className="product-detail-new">신제품</div>}
          <div className="product-detail-description">
           2025년 Hot Item
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
