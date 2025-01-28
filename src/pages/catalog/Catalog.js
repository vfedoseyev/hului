import React from 'react';
import Footer from '../../components/footer/Footer';
import HeaderWhite from '../../components/headerWhite/HeaderWhite';
import Card from '../../components/card/Card';
import MyMap from '../../components/myMap/MyMap';
import './Catalog.css';

const Catalog = () => {
  return (<div>
    <div className="container">
      <HeaderWhite />
      <div className='catalog grid-container'>
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