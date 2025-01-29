import React from 'react';
import Footer from '../../components/footer/Footer';
import HeaderWhite from '../../components/headerWhite/HeaderWhite';
import Card from '../../components/card/Card';
import MyMap from '../../components/myMap/MyMap';
import { Link } from "react-router-dom";
import './Catalog.css';

const Catalog = () => {
  const products = [
    { id: 1, name: "Товар 1" },
    { id: 2, name: "Товар 2" },
  ];

  return (
    <div>
      <div className="container">
        <HeaderWhite />
        <div className='catalog grid-container'>
          {/* Исправленный код: теперь `map` корректно использует `product` */}
          {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              {product.name}
            </Link>
          ))}
          
          {/* Карточки товаров */}
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <MyMap />
      </div>
      <Footer />
    </div>
  );
};

export default Catalog;
