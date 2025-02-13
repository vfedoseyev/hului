import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; // Исправленный импорт модулей
import 'swiper/css'; // Основные стили Swiper
import 'swiper/css/navigation'; // Стили для стрелок
import 'swiper/css/pagination'; // Стили для точек
import './Home.css';
import Header from '../../components/header/Header';
import Card from '../../components/card/Card';
import Links from '../../components/links/Links';
import FAQ from '../../components/faq/FAQ';
import Footer from '../../components/footer/Footer';
import AboutUs from '../../components/aboutUs/AboutUs';
import Services from '../../components/services/Services';
import Form from '../../components/form/Form';

const Home = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const openForm = () => {
        setIsFormVisible(true);
    };

    const closeForm = () => {
        setIsFormVisible(false);
    };

    return (
        <div>
            <div className='main-bg'>
                <div className="container">
                    <main className="main">
                        <Header />
                        <div>
                            <h1>Аренда коттеджей и домов в Казани</h1>
                            <p>Найдите идеальный вариант сами или предоставьте это нам</p>
                        </div>
                        <Links />
                    </main>
                </div>
            </div>
            <div className="container">
                <section className='aboutUs'>
                    <h2>О нас</h2>
                    <AboutUs />
                </section>
                <section className='popular'>
                    <h2>Популярное в каталоге</h2>
                    <div className="grid-container">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <Link className="link-center orange-btn " to="/catalog">Перейти в каталог</Link>
                </section>
                <section className='services' id='services'>
                    <h2>Можем организовать для Вас</h2>
                    <Services />
                    {/* Кнопка, которая открывает форму */}
                    <Link className="link-center orange-btn" onClick={openForm}>Узнать подробнее</Link>

                    {/* Форма появляется только при visible === true */}
                    {isFormVisible && <Form isVisible={isFormVisible} closeForm={closeForm} />}
                </section>
                <section className='faq'>
                    <h2>Частые вопросы</h2>
                    <FAQ />
                </section>
            </div>
            <div className='footer-bg'>
                <div className='container'>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Home;