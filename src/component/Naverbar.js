import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];

  return (
    <div className="navbar">
      <div className="top-bar">
        <div className="login-button">
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>

        <div className="nav-section">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg"
            alt="H&M Logo"
          />
        </div>

        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="검색" className="search-input" />
        </div>
      </div>

      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
