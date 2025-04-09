import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar as BSNavbar, Container, Form, Button } from 'react-bootstrap';

const Navbar = ({ authenticate, setAuthenticate, setSearchQuery }) => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const logout = () => {
    setAuthenticate(false);
    navigate("/");
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <BSNavbar bg="light" className="justify-content-between px-3">
      <div
        onClick={() => navigate("/")}
        style={{ 
          cursor: "pointer", 
          display: "flex", 
          alignItems: "center", 
          fontWeight: "bold", 
          fontSize: "1.5rem", 
          color: "#d01012" 
        }}
      >
        H&M
      </div>

      <Form.Control
        type="text"
        placeholder="검색어 입력"
        onChange={handleSearch}
        style={{ width: "300px" }}
      />

      {authenticate ? (
        <Button variant="outline-danger" onClick={logout}>로그아웃</Button>
      ) : (
        <Button variant="outline-primary" onClick={goToLogin}>로그인</Button>
      )}
    </BSNavbar>
  );
};

export default Navbar;
