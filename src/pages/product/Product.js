import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"; // Для получения ID из URL
import "./Product.css"; // Создай файл для стилей
import Footer from '../../components/footer/Footer';
import HeaderWhite from '../../components/headerWhite/HeaderWhite';
import MyMap from '../../components/myMap/MyMap';
// import { Link } from "react-router-dom";


const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  
  useEffect(() => {
      fetch("/data/products.json")
          .then(res => res.json())
          .then(data => {
              const foundProduct = data.find(item => String(item.id) === id);
              setProduct(foundProduct || null);
          })
          .catch(() => setProduct(null));
  }, [id]);

  if (!product) return <p>Товар не найден</p>;

  return (<>
    <div className="container">
      <HeaderWhite />
      <div className='title'>
        <h1>{product.title}</h1>
        <div className='address'>{product.address}</div>
        <div className='title__btn'>
          <div className=''>
            <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.3993 19.2787L9.15053 16.4162C8.46527 17.1487 7.57551 17.6583 6.59687 17.8785C5.61823 18.0988 4.59597 18.0196 3.66293 17.6512C2.7299 17.2829 1.92923 16.6424 1.36499 15.813C0.80075 14.9836 0.499023 14.0037 0.499023 13.0005C0.499023 11.9974 0.80075 11.0175 1.36499 10.1881C1.92923 9.35873 2.7299 8.71823 3.66293 8.34987C4.59597 7.98151 5.61823 7.90231 6.59687 8.12256C7.57551 8.34281 8.46527 8.85234 9.15053 9.58492L14.4005 6.72242C14.1025 5.54251 14.245 4.2944 14.8013 3.21205C15.3577 2.12969 16.2897 1.28739 17.4226 0.843045C18.5556 0.398696 19.8117 0.3828 20.9555 0.798337C22.0993 1.21387 23.0524 2.03231 23.6359 3.10025C24.2195 4.16818 24.3935 5.41228 24.1254 6.59935C23.8573 7.78642 23.1655 8.83496 22.1796 9.54843C21.1937 10.2619 19.9814 10.5913 18.77 10.4749C17.5586 10.3585 16.4313 9.80431 15.5993 8.91617L10.3493 11.7787C10.5508 12.5804 10.5508 13.4195 10.3493 14.2212L15.598 17.0837C16.43 16.1955 17.5574 15.6413 18.7688 15.5249C19.9802 15.4085 21.1924 15.7379 22.1783 16.4514C23.1642 17.1649 23.8561 18.2134 24.1242 19.4005C24.3923 20.5876 24.2182 21.8317 23.6347 22.8996C23.0511 23.9675 22.0981 24.786 20.9543 25.2015C19.8104 25.617 18.5543 25.6011 17.4214 25.1568C16.2884 24.7124 15.3564 23.8701 14.8001 22.7878C14.2437 21.7054 14.1012 20.4573 14.3993 19.2774V19.2787ZM5.49928 15.4999C6.16232 15.4999 6.79821 15.2365 7.26705 14.7677C7.73589 14.2988 7.99928 13.663 7.99928 12.9999C7.99928 12.3369 7.73589 11.701 7.26705 11.2322C6.79821 10.7633 6.16232 10.4999 5.49928 10.4999C4.83624 10.4999 4.20035 10.7633 3.73151 11.2322C3.26267 11.701 2.99928 12.3369 2.99928 12.9999C2.99928 13.663 3.26267 14.2988 3.73151 14.7677C4.20035 15.2365 4.83624 15.4999 5.49928 15.4999ZM19.2493 7.99992C19.9123 7.99992 20.5482 7.73653 21.017 7.26769C21.4859 6.79884 21.7493 6.16296 21.7493 5.49992C21.7493 4.83688 21.4859 4.20099 21.017 3.73215C20.5482 3.26331 19.9123 2.99992 19.2493 2.99992C18.5862 2.99992 17.9504 3.26331 17.4815 3.73215C17.0127 4.20099 16.7493 4.83688 16.7493 5.49992C16.7493 6.16296 17.0127 6.79884 17.4815 7.26769C17.9504 7.73653 18.5862 7.99992 19.2493 7.99992ZM19.2493 22.9999C19.9123 22.9999 20.5482 22.7365 21.017 22.2677C21.4859 21.7988 21.7493 21.163 21.7493 20.4999C21.7493 19.8369 21.4859 19.201 21.017 18.7322C20.5482 18.2633 19.9123 17.9999 19.2493 17.9999C18.5862 17.9999 17.9504 18.2633 17.4815 18.7322C17.0127 19.201 16.7493 19.8369 16.7493 20.4999C16.7493 21.163 17.0127 21.7988 17.4815 22.2677C17.9504 22.7365 18.5862 22.9999 19.2493 22.9999Z" fill="#F4683F" />
            </svg>
          </div>
          <div className=''>
            <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.0003 2.66122C15.9365 0.0249748 20.474 0.112475 23.3028 2.94622C26.1303 5.78122 26.2278 10.2962 23.5978 13.2412L12.9978 23.8562L2.40028 13.2412C-0.229719 10.2962 -0.130969 5.77372 2.69528 2.94622C5.52653 0.116225 10.0553 0.0212248 13.0003 2.66122ZM21.5328 4.71247C19.6578 2.83498 16.6328 2.75873 14.6703 4.52122L13.0015 6.01872L11.3315 4.52247C9.36278 2.75747 6.34403 2.83497 4.46403 4.71497C2.60153 6.57747 2.50778 9.55872 4.22403 11.5287L12.999 20.3175L21.774 11.53C23.4915 9.55872 23.3978 6.58122 21.5328 4.71247Z" fill="#F4683F" />
            </svg>
          </div>
        </div>
      </div>
      <div className="photo-grid">
        <img src={require("../../assets/product.jpg")} alt="Main" className="photo main" />
        <img src={require("../../assets/product.jpg")} alt="Photo 1" className="photo small" />
        <img src={require("../../assets/product.jpg")} alt="Photo 2" className="photo small" />
        <img src={require("../../assets/product.jpg")} alt="Photo 3" className="photo small" />
        <img src={require("../../assets/product.jpg")} alt="Photo 4" className="photo small" />
      </div>
      <div className='specification-wrap'>
        <div className='specification'>
          <div className='specification__parametres'>
            <div className='specification__item1'>
              <div className='specification__point1'>
                <div>Тип жилья</div>
                <div>Уникальное жилье</div>
              </div>
              <div className='specification__point1'>
                <div>Этажи</div>
                <div>2 этажа</div>
              </div>
              <div className='specification__point1'>
                <div>Площадь</div>
                <div>234 м2</div>
              </div>
              <div className='specification__point1'>
                <div>Участок</div>
                <div>12 соток</div>
              </div>
            </div>
            <div className='specification__item2'>
              <div className='specification__point2'>
                <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.95926 0.0299186C4.45336 0.115195 3.95534 0.367298 3.59962 0.718165C3.35359 0.960862 3.09444 1.37655 2.98015 1.7118C2.88291 1.997 2.8804 2.05943 2.86605 4.55943L2.85134 7.11546L2.39267 7.1404C1.70605 7.17775 1.23047 7.36818 0.769371 7.7904C0.483949 8.05177 0.234913 8.4317 0.103986 8.80555L0 9.10238V12.8372C0 16.5401 0.000809586 16.573 0.0927419 16.6945C0.258886 16.9141 0.416214 17 0.652162 17C0.888019 17 1.04526 16.9142 1.21158 16.6947C1.28921 16.5923 1.3068 16.4932 1.31953 16.0873L1.33477 15.6024H11.4915H21.6483L21.6635 16.0873C21.6763 16.4932 21.6939 16.5923 21.7715 16.6947C21.9378 16.9142 22.0951 17 22.3309 17C22.5668 17 22.7241 16.9141 22.8903 16.6945C22.9819 16.5735 22.9832 16.529 22.9957 12.9703C23.0068 9.81117 22.9995 9.32928 22.9368 9.04878C22.8416 8.62266 22.655 8.26705 22.3552 7.94027C21.8816 7.424 21.3414 7.17891 20.5904 7.13951L20.1317 7.11546L20.117 4.55943C20.1027 2.05943 20.1002 1.997 20.0029 1.7118C19.7414 0.944756 19.1322 0.354431 18.328 0.08884C18.0927 0.0111505 17.7657 0.00684677 11.6265 0.000590789C8.07668 -0.00300307 5.07647 0.0101746 4.95926 0.0299186ZM17.9655 1.38556C18.1372 1.43587 18.2647 1.5152 18.4201 1.6685C18.7823 2.0258 18.7778 1.98693 18.7778 4.74014V7.12797H17.5184C16.8258 7.12797 16.2591 7.11839 16.2591 7.10672C16.2591 7.09505 16.3097 6.93679 16.3715 6.75505C16.4736 6.45512 16.4839 6.35627 16.4839 5.68457C16.4839 5.15357 16.4638 4.86752 16.4127 4.6719C16.1986 3.85286 15.4881 3.14917 14.6605 2.93651C14.266 2.83513 8.71711 2.83513 8.32257 2.93651C7.49792 3.14841 6.78369 3.85578 6.57037 4.6719C6.51928 4.86752 6.49913 5.15357 6.49913 5.68457C6.49913 6.35627 6.50952 6.45512 6.61157 6.75505C6.67341 6.93679 6.72401 7.09505 6.72401 7.10672C6.72401 7.11839 6.1573 7.12797 5.46466 7.12797H4.20532V4.74014C4.20532 2.69195 4.21544 2.31863 4.27647 2.11596C4.37376 1.79269 4.64577 1.51321 4.97073 1.40255C5.20794 1.32176 5.45481 1.31852 11.4721 1.31714C17.0366 1.31586 17.7533 1.3234 17.9655 1.38556ZM14.4835 4.28265C14.7144 4.38617 14.9456 4.61418 15.0505 4.84201C15.1174 4.98736 15.1328 5.13631 15.1337 5.64477C15.1346 6.23887 15.1287 6.28066 15.011 6.50965C14.8731 6.77773 14.5998 7.00906 14.3352 7.08156C14.1065 7.14421 8.87655 7.14421 8.64789 7.08156C8.38329 7.00906 8.10997 6.77773 7.97211 6.50965C7.85441 6.28066 7.84847 6.23887 7.84942 5.64477C7.85054 4.94273 7.89597 4.78074 8.16673 4.51364C8.4965 4.18833 8.35522 4.20159 11.4915 4.20159C14.1179 4.20159 14.3145 4.20692 14.4835 4.28265ZM20.8568 8.50544C21.1071 8.57399 21.3895 8.80928 21.5189 9.05703C21.6313 9.27222 21.6341 9.3004 21.6473 10.3322L21.6608 11.3874H11.4915H1.32227L1.33576 10.3322C1.34894 9.30612 1.3524 9.27116 1.46192 9.06134C1.59033 8.81545 1.82075 8.61348 2.07464 8.52417C2.22054 8.47288 3.74575 8.46267 11.469 8.46121C17.6878 8.4601 20.7438 8.47447 20.8568 8.50544ZM21.6563 13.4949V14.2713H11.4915H1.32681V13.4949V12.7184H11.4915H21.6563V13.4949Z" fill="#F4683F" />
                </svg>
                <span >25 спальных мест</span>
              </div>
              <div className='specification__point2'>
                <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.95926 0.0299186C4.45336 0.115195 3.95534 0.367298 3.59962 0.718165C3.35359 0.960862 3.09444 1.37655 2.98015 1.7118C2.88291 1.997 2.8804 2.05943 2.86605 4.55943L2.85134 7.11546L2.39267 7.1404C1.70605 7.17775 1.23047 7.36818 0.769371 7.7904C0.483949 8.05177 0.234913 8.4317 0.103986 8.80555L0 9.10238V12.8372C0 16.5401 0.000809586 16.573 0.0927419 16.6945C0.258886 16.9141 0.416214 17 0.652162 17C0.888019 17 1.04526 16.9142 1.21158 16.6947C1.28921 16.5923 1.3068 16.4932 1.31953 16.0873L1.33477 15.6024H11.4915H21.6483L21.6635 16.0873C21.6763 16.4932 21.6939 16.5923 21.7715 16.6947C21.9378 16.9142 22.0951 17 22.3309 17C22.5668 17 22.7241 16.9141 22.8903 16.6945C22.9819 16.5735 22.9832 16.529 22.9957 12.9703C23.0068 9.81117 22.9995 9.32928 22.9368 9.04878C22.8416 8.62266 22.655 8.26705 22.3552 7.94027C21.8816 7.424 21.3414 7.17891 20.5904 7.13951L20.1317 7.11546L20.117 4.55943C20.1027 2.05943 20.1002 1.997 20.0029 1.7118C19.7414 0.944756 19.1322 0.354431 18.328 0.08884C18.0927 0.0111505 17.7657 0.00684677 11.6265 0.000590789C8.07668 -0.00300307 5.07647 0.0101746 4.95926 0.0299186ZM17.9655 1.38556C18.1372 1.43587 18.2647 1.5152 18.4201 1.6685C18.7823 2.0258 18.7778 1.98693 18.7778 4.74014V7.12797H17.5184C16.8258 7.12797 16.2591 7.11839 16.2591 7.10672C16.2591 7.09505 16.3097 6.93679 16.3715 6.75505C16.4736 6.45512 16.4839 6.35627 16.4839 5.68457C16.4839 5.15357 16.4638 4.86752 16.4127 4.6719C16.1986 3.85286 15.4881 3.14917 14.6605 2.93651C14.266 2.83513 8.71711 2.83513 8.32257 2.93651C7.49792 3.14841 6.78369 3.85578 6.57037 4.6719C6.51928 4.86752 6.49913 5.15357 6.49913 5.68457C6.49913 6.35627 6.50952 6.45512 6.61157 6.75505C6.67341 6.93679 6.72401 7.09505 6.72401 7.10672C6.72401 7.11839 6.1573 7.12797 5.46466 7.12797H4.20532V4.74014C4.20532 2.69195 4.21544 2.31863 4.27647 2.11596C4.37376 1.79269 4.64577 1.51321 4.97073 1.40255C5.20794 1.32176 5.45481 1.31852 11.4721 1.31714C17.0366 1.31586 17.7533 1.3234 17.9655 1.38556ZM14.4835 4.28265C14.7144 4.38617 14.9456 4.61418 15.0505 4.84201C15.1174 4.98736 15.1328 5.13631 15.1337 5.64477C15.1346 6.23887 15.1287 6.28066 15.011 6.50965C14.8731 6.77773 14.5998 7.00906 14.3352 7.08156C14.1065 7.14421 8.87655 7.14421 8.64789 7.08156C8.38329 7.00906 8.10997 6.77773 7.97211 6.50965C7.85441 6.28066 7.84847 6.23887 7.84942 5.64477C7.85054 4.94273 7.89597 4.78074 8.16673 4.51364C8.4965 4.18833 8.35522 4.20159 11.4915 4.20159C14.1179 4.20159 14.3145 4.20692 14.4835 4.28265ZM20.8568 8.50544C21.1071 8.57399 21.3895 8.80928 21.5189 9.05703C21.6313 9.27222 21.6341 9.3004 21.6473 10.3322L21.6608 11.3874H11.4915H1.32227L1.33576 10.3322C1.34894 9.30612 1.3524 9.27116 1.46192 9.06134C1.59033 8.81545 1.82075 8.61348 2.07464 8.52417C2.22054 8.47288 3.74575 8.46267 11.469 8.46121C17.6878 8.4601 20.7438 8.47447 20.8568 8.50544ZM21.6563 13.4949V14.2713H11.4915H1.32681V13.4949V12.7184H11.4915H21.6563V13.4949Z" fill="#F4683F" />
                </svg>
                <span>5 спален</span>
              </div>
              <div className='specification__point2'>
                <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.667969 20.1641C0.667969 18.2191 1.44059 16.3539 2.81585 14.9786C4.19112 13.6033 6.05638 12.8307 8.0013 12.8307C9.94622 12.8307 11.8115 13.6033 13.1868 14.9786C14.562 16.3539 15.3346 18.2191 15.3346 20.1641H13.5013C13.5013 18.7054 12.9218 17.3064 11.8904 16.275C10.8589 15.2435 9.45999 14.6641 8.0013 14.6641C6.54261 14.6641 5.14366 15.2435 4.11221 16.275C3.08076 17.3064 2.5013 18.7054 2.5013 20.1641H0.667969ZM8.0013 11.9141C4.96255 11.9141 2.5013 9.45281 2.5013 6.41406C2.5013 3.37531 4.96255 0.914062 8.0013 0.914062C11.0401 0.914062 13.5013 3.37531 13.5013 6.41406C13.5013 9.45281 11.0401 11.9141 8.0013 11.9141ZM8.0013 10.0807C10.0271 10.0807 11.668 8.4399 11.668 6.41406C11.668 4.38823 10.0271 2.7474 8.0013 2.7474C5.97547 2.7474 4.33463 4.38823 4.33463 6.41406C4.33463 8.4399 5.97547 10.0807 8.0013 10.0807Z" fill="#F4683F" />
                </svg>
                <span>до 35 человек</span>
              </div>
            </div>
          </div>
          <div className='specification__description'>
            <p className='headline'>Описание</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className='specification__additional'>
            <p className='headline'>Дополнительные платы</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          </div>
          <div className='specification__time'>
            <p className='headline'>Время заезда и выезда</p>
            <div className='time'>
              <span className='time__text'>17:00</span>
              <span> | </span>
              <span className='time__text'>15:00</span>
            </div>
          </div>
          <div className='specification__attention'>
            <p className='headline'>Важная информация</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

        </div>
        <div className='price'>
          <div className='headline'>Стоимость</div>
          <div className='price__list'>
            <div className='prise__item'>Будни <br /> 8 000 ₽</div>
            <div className='prise__item'>Пятница <br /> 10 000 ₽</div>
            <div className='prise__item'>Залог <br /> 2 000 ₽</div>
            <div className='prise__item'>Суббота <br /> 122 000 ₽</div>
            <div className='prise__item'>Воскресенье <br /> 12 000 ₽</div>

          </div>
          <div className='price__weekend'>Полные выходные (ПТ-ВС)
            12 000 ₽</div>
          <div className='price__new-year'>Новый год (2 дня)
            от 100 000 ₽</div>
          <div className='price__january'>Январские празднкии (сутки)
            от 30 000 ₽</div>
          <div className='price__btn'></div>

        </div>
      </div>
    </div>
    <Footer />
  </>
  );
};

export default Product;