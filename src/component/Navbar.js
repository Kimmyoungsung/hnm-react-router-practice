import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar as BSNavbar, Nav, Offcanvas, Form, Button, Container } from 'react-bootstrap';
import './Navbar.css'; // (추가 스타일 분리 가능)

const Navbar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  const goToLogin = () => {
    navigate("/login");
    handleClose();
  };

  const logout = () => {
    setAuthenticate(false);
    navigate("/");
    handleClose();
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const query = e.target.value.trim();
      navigate(query ? `/?q=${encodeURIComponent(query)}` : '/');
      handleClose();
    }
  };

  return (
    <>
      <BSNavbar bg="light" expand="lg" className="px-3 justify-content-between">
        <BSNavbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
        <div
          onClick={() => navigate("/")}
          style={{
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: "#d01012",
          }}
        >
          H&M
        </div>
        <Form.Control
          type="text"
          placeholder="검색어 입력 후 Enter"
          onKeyDown={handleSearchKeyDown}
          style={{ width: "300px" }}
          className="d-none d-lg-block"
        />
        {authenticate ? (
          <Button variant="outline-danger" onClick={logout} className="d-none d-lg-block">로그아웃</Button>
        ) : (
          <Button variant="outline-primary" onClick={goToLogin} className="d-none d-lg-block">로그인</Button>
        )}
      </BSNavbar>

      <Offcanvas show={showOffcanvas} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>메뉴</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form.Control
            type="text"
            placeholder="검색어 입력 후 Enter"
            onKeyDown={handleSearchKeyDown}
            className="mb-3"
          />
          <Nav className="flex-column">
            <Nav.Link onClick={() => { navigate("/"); handleClose(); }}>홈</Nav.Link>
            {authenticate ? (
              <Button variant="outline-danger" onClick={logout}>로그아웃</Button>
            ) : (
              <Button variant="outline-primary" onClick={goToLogin}>로그인</Button>
            )}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navbar;
