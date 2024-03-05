import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import CardsList from './components/cards';
import Charts from './components/chart'; 
import TableComponent from './components/table'; 
import FormDataForm from './components/formdata';
import Footer from './components/footer';
import './App.css';


const Home = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '75vh', 
      color: 'maroon',
    }}
  >
    <div style={{ fontSize: '5em', fontWeight: 'Times New Roman' }}>KIETIAN SPACE</div>
  </div>
);

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };


  const chartsData = [
    { title: 'NCC', KIET: 30, KIEW: 50, KIEK: 20 },
    { title: 'K-HUB', KIET: 40, KIEW: 40, KIEK: 20 },
    { title: 'GCC ', KIET: 30, KIEW: 50, KIEK: 20 },
    { title: 'TM', KIET: 35, KIEW: 35, KIEK: 30 },
 
  ];

  return (
    <div className="App">
      <Router>
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} closeSidebar={toggleSidebar} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cards" element={<CardsList />} />
            <Route path="/charts" element={<Charts data={chartsData} />} />
            
            <Route path="/table" element={<TableComponent />} />
            
            <Route path="/formdata" element={<FormDataForm />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App