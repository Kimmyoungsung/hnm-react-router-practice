import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import Navbar from './component/Navbar.js';
import PrivateRoute from './component/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [authenticate, setAuthenticate] = useState(false); // 로그인 상태
  const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태

  useEffect(() => {
    console.log("로그인 상태:", authenticate);
  }, [authenticate]);

  return (
    <div>
      <Navbar
        authenticate={authenticate}
        setAuthenticate={setAuthenticate}
        setSearchQuery={setSearchQuery}
      />
      <Routes>
        <Route path="/" element={<ProductAll searchQuery={searchQuery} />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
        <Route
          path="/product/:id"
          element={
            <PrivateRoute authenticate={authenticate}>
              <ProductDetail />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
