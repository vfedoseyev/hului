import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Catalog = () => {
  return (
    <div className="container">
      <Header />
      <h1>Каталог товаров</h1>
      <p>Здесь будет ваш каталог товаров.</p>
      <Footer />
    </div>
  );
};

export default Catalog;