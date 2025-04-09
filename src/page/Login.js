import React from 'react';
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();

  const loginUser = (event) => {
    event.preventDefault();
    console.log("로그인 시도");
    setAuthenticate(true); // 로그인 처리
    navigate("/"); // 로그인 후 홈으로 이동
  };

  return (
    <Container>
      <Form onSubmit={loginUser}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="danger" type="submit">
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
