import React from 'react';
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


const Home = () => {
    // const cards = [
    //     { title: 'С бассейном', link: '/quick-picks' },
    //     { title: 'Семейные и уютные', link: '/quick-picks' },
    //     { title: 'Хиты продаж', link: '/quick-picks' },
    //     { title: 'Под свадьбы и корпоративы', link: '/quick-picks' },
    //     { title: 'С русской баней на дровах', link: '/quick-picks' },
    // ];

    return (<div>
        <div className='main-bg'>
            <div className="container">
                <main className="main">
                    <Header />
                    <div>
                        <h1>Аренда коттеджей и домов в Казани</h1>
                        <p>Найдите идеальный вариант сами или предоставьте это нам</p>
                    </div>
                    {/* <Swiper
                    modules={[Navigation, Pagination]} // Подключение модулей
                    spaceBetween={20} // Расстояние между карточками
                    slidesPerView={1.5} // Видимые карточки
                    navigation // Включение стрелок
                    pagination={{ clickable: true }} // Включение точек навигации
                    breakpoints={{
                        480: { slidesPerView: 1 }, // Мобилка
                        768: { slidesPerView: 2.5 }, // Планшеты
                        1024: { slidesPerView: 4 }, // Десктопы
                    }}
                >
                    {cards.map((card, index) => (
                        <SwiperSlide key={index}>
                            <Link to={card.link} className="collection__card">
                                <div className="collection__card-img"></div>
                                <p className="collection__title">{card.title}</p>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper> */}
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
                <Link className="link-center orange-btn " to="/catalog">Узнать подробнее</Link>
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
