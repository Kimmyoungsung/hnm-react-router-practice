import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");

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

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("사이즈를 선택해주세요!");
      return;
    }
    alert(`장바구니에 추가되었습니다! (${product.title} / ${selectedSize})`);
  };

  useEffect(() => {
    getProductDetail();
  }, [id]);

  if (!product) return <div className="loading">Loading...</div>;

  return (
    <div className="product-detail-wrapper">
      <div className="product-detail-left">
        <img
          className="product-detail-image"
          src={product.img}
          alt={product.title}
        />
      </div>
      <div className="product-detail-right">
        {product.choice && <div className="product-detail-badge">Conscious Choice</div>}
        <h2 className="product-detail-title">{product.title}</h2>
        <p className="product-detail-price">{formatPrice(product.price)}</p>
        {product.new && <div className="product-detail-new">신제품</div>}
  
        <div className="product-detail-size">
          {/* <label htmlFor="size-select">원하는 사이즈 선택</label> */}
          <select
            id="size-select"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            <option value="">사이즈 선택하세요!</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>

        <button className="add-to-cart-button" onClick={handleAddToCart}>
          장바구니에 추가
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
