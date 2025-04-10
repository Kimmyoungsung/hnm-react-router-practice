import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const location = useLocation();

  const getProducts = async () => {
    try {
      const url = "https://my-json-server.typicode.com/Kimmyoungsung/hnm-react-router-practice/products";
      const response = await fetch(url);
      const data = await response.json();
      setProductList(data);
    } catch (error) {
      console.error('JSON 파싱 실패 ❌:', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q') || '';

  const filteredList = productList.filter(product =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Container>
      {query && (
        <h5 className="mt-3 mb-4">🔍 "{query}" 검색 결과</h5>
      )}
      <Row>
        {filteredList.length === 0 ? (
          <p className="text-muted ms-3">검색 결과가 없습니다.</p>
        ) : (
          filteredList.map(product => (
            <Col key={product.id} lg={3} md={4} sm={6} xs={12}>
              <ProductCard product={product} />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default ProductAll;