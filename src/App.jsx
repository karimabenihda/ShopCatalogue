import './App.css';
import Category from './components/Category.jsx';
import Prices from './components/Prices.jsx';
import Affichage from './components/Produits.jsx';
import { useState, useEffect } from 'react';
import { RiArrowDropRightLine } from "react-icons/ri";
import { RiArrowDropLeftLine } from "react-icons/ri";

function App() {
  const [loading, setLoading] = useState(true); // État pour gérer le chargement
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Simuler un temps de chargement
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 secondes

    return () => clearTimeout(timer);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Chargement...</p>
      </div>
    );
  }

  return (
    <div className="App">
       <RiArrowDropRightLine
          style={{
            width: "70px",
            fill: '#6892d5',
            height: "70px",
            cursor: "pointer",
            position: "absolute",
            top: "50px",
  
            left: "23px",
            display: sidebarOpen ? 'block' : 'none',

            zIndex: 1000,
          }}
          onClick={toggleSidebar}
        />
      <RiArrowDropLeftLine
        onClick={toggleSidebar}
        style={{
          width: "60px",
          fill: '#6892d5',
          height: "60px",
          display: sidebarOpen ? 'none' : 'block',
          cursor: "pointer",
          position: "absolute",
          marginLeft:"180px",
          top: "32px",
          left: "10px",
          zIndex: 1000,
        }}
      />
      <div
        className={`sidebar ${sidebarOpen ? 'open' : ''}`}
        style={{
          zIndex: 999,
        }}
      >
       
        <Category onchangeCategory={setCategory} />
        <Prices onchangePrice={setPrice} />
      </div>
      <div className="main">
        <Affichage category={category} price={price} />
      </div>
    </div>
  );
}

export default App;
