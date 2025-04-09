import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

const ProductAll = ({ searchQuery }) => {
  const [productList, setProductList] = useState([]);

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

  const filteredList = productList.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <Row>
        {filteredList.map(product => (
          <Col key={product.id} lg={3} md={4} sm={6} xs={12}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
