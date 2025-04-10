import React from 'react';
import { Form, Button, Container, Card } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import './Login.css'; // 스타일 추가

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();

  const loginUser = (event) => {
    event.preventDefault();
    console.log("로그인 시도");
    setAuthenticate(true);
    navigate("/");
  };

  return (
    <div className="login-wrapper">
      <Card className="login-card">
        <Card.Body>
          <h2 className="text-center mb-4">로그인</h2>
          <Form onSubmit={loginUser}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>이메일 주소</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>

            <Button variant="danger" type="submit" className="w-100">
              로그인
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
