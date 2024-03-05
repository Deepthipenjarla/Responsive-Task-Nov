// Navbar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ toggleSidebar }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
   
    if (searchTerm.trim() !== '') {
      const sectionId = getSectionId(searchTerm);

      if (sectionId) {
        
        navigate(`/${sectionId}`);
      }
    }
  };

  const getSectionId = (searchTerm) => {
    const sectionIdMap = {
      cards: 'cards',
      charts: 'charts',
      Tables:'Tables',
      Formdata:'Formdata',
      
    };

    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    return sectionIdMap[lowerCaseSearchTerm];
  };

  return (
    <nav>
      <div className="navbar-content">
        <div className="KIETIAN SPACE" onClick={() => navigate('/')}>
          KIETIAN SPACE
        </div>
        <div className="menu-icon" onClick={toggleSidebar}>
          &#9776;
        </div>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
