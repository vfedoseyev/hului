import React, { useEffect, useState } from 'react';
import Footer from '../../components/footer/Footer';
import HeaderWhite from '../../components/headerWhite/HeaderWhite';
import Card from '../../components/card/Card';
import MyMap from '../../components/myMap/MyMap';
import { Link } from "react-router-dom";
import './Catalog.css';

const Catalog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data/products.json') // Путь к JSON-файлу
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Ошибка загрузки данных:', error));
  }, []);

  return (
    <div>
      <div className="container">
        <HeaderWhite />
        <div className='catalog grid-container'>
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
        <MyMap />
      </div>
      <Footer />
    </div>
    
  );
};

export default Catalog;
