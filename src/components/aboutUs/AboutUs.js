import React from 'react';
import './AboutUs.css';

const AboutUs = ({ isOpen, toggleMenu }) => {
    return (

        <div className='aboutUs__container'>
            <div className='aboutUs__item'>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.3333 0.333374C29.2533 0.333374 30 1.08004 30 2.00004V8.26171L26.6667 11.595V3.66671H3.33333V30.3334H26.6667V25.7367L30 22.4034V32C30 32.92 29.2533 33.6667 28.3333 33.6667H1.66667C0.746667 33.6667 0 32.92 0 32V2.00004C0 1.08004 0.746667 0.333374 1.66667 0.333374H28.3333ZM31.2967 11.68L33.6533 14.0367L20.69 27L18.33 26.9967L18.3333 24.6434L31.2967 11.68ZM16.6667 17V20.3334H8.33333V17H16.6667ZM21.6667 10.3334V13.6667H8.33333V10.3334H21.6667Z" fill="#F4683F" />
                </svg>

                <p>Работаем с юридическими  и физическими лицами</p>
            </div>
            <div className='aboutUs__item'>
                <svg width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.6673 25.3366C33.6666 27.6159 32.8875 29.8265 31.459 31.6026C30.0306 33.3787 28.0384 34.6138 25.8123 35.1033L24.749 31.9133C25.7227 31.7529 26.6487 31.3785 27.4603 30.8171C28.2719 30.2556 28.9488 29.5212 29.4423 28.6666H25.334C24.4499 28.6666 23.6021 28.3154 22.977 27.6903C22.3518 27.0652 22.0007 26.2173 22.0007 25.3333V18.6666C22.0007 17.7825 22.3518 16.9347 22.977 16.3096C23.6021 15.6844 24.4499 15.3333 25.334 15.3333H30.2307C29.8239 12.1114 28.2555 9.14871 25.8197 7.00105C23.3839 4.85338 20.2481 3.66838 17.0007 3.66838C13.7532 3.66838 10.6174 4.85338 8.18161 7.00105C5.74578 9.14871 4.17737 12.1114 3.77065 15.3333H8.66732C9.55137 15.3333 10.3992 15.6844 11.0243 16.3096C11.6495 16.9347 12.0007 17.7825 12.0007 18.6666V25.3333C12.0007 26.2173 11.6495 27.0652 11.0243 27.6903C10.3992 28.3154 9.55137 28.6666 8.66732 28.6666H3.66732C2.78326 28.6666 1.93542 28.3154 1.31029 27.6903C0.685174 27.0652 0.333984 26.2173 0.333984 25.3333V16.9999C0.333984 7.79492 7.79565 0.333252 17.0007 0.333252C26.2057 0.333252 33.6673 7.79492 33.6673 16.9999V25.3366ZM30.334 25.3333V18.6666H25.334V25.3333H30.334ZM3.66732 18.6666V25.3333H8.66732V18.6666H3.66732Z" fill="#F4683F" />
                </svg>

                <p>Бесплатный подбор, честные консультации и открытость к сотрудничеству</p>
            </div>
            <div className='aboutUs__item'>
                <svg width="31" height="36" viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.7343 25.0984L24.0277 25.3934L24.3243 25.0984C24.6726 24.7502 25.086 24.474 25.5409 24.2855C25.9959 24.0971 26.4836 24.0001 26.976 24.0001C27.4685 24.0001 27.9561 24.0971 28.4111 24.2855C28.8661 24.474 29.2795 24.7502 29.6277 25.0984C29.9759 25.4466 30.2521 25.86 30.4406 26.315C30.629 26.77 30.726 27.2576 30.726 27.7501C30.726 28.2425 30.629 28.7302 30.4406 29.1852C30.2521 29.6401 29.9759 30.0535 29.6277 30.4017L24.0277 36.0001L18.431 30.4017C17.7278 29.6985 17.3327 28.7446 17.3327 27.7501C17.3327 26.7555 17.7278 25.8017 18.431 25.0984C19.1343 24.3951 20.0881 24.0001 21.0827 24.0001C22.0772 24.0001 23.0311 24.3951 23.7343 25.0984ZM13.9993 22.3334V25.6667C11.3472 25.6667 8.80365 26.7203 6.92828 28.5957C5.05292 30.471 3.99935 33.0146 3.99935 35.6667H0.666016C0.666056 32.2027 2.01424 28.8747 4.42513 26.3872C6.83602 23.8998 10.1203 22.4483 13.5827 22.3401L13.9993 22.3334ZM13.9993 0.666748C19.5243 0.666748 23.9993 5.14175 23.9993 10.6667C24.0003 13.2543 22.9978 15.7414 21.2028 17.6051C19.4078 19.4688 16.9601 20.5639 14.3743 20.6601L13.9993 20.6667C8.47435 20.6667 3.99935 16.1917 3.99935 10.6667C3.99842 8.0792 5.00085 5.59209 6.79586 3.7284C8.59086 1.8647 11.0386 0.769617 13.6243 0.673415L13.9993 0.666748ZM13.9993 4.00008C10.316 4.00008 7.33268 6.98341 7.33268 10.6667C7.33268 14.3501 10.316 17.3334 13.9993 17.3334C17.6827 17.3334 20.666 14.3501 20.666 10.6667C20.666 6.98341 17.6827 4.00008 13.9993 4.00008Z" fill="#F4683F" />
                </svg>

                <p>Работаем с 2014 года. Консультируем 30-80 человек в сутки, заселяем от 3 до 5 компаний в день. Помогли более 21 000 клиентам</p>
            </div>

            <div className='aboutUs__item'>
                <svg width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.0002 30.4333L8.24518 37.0133L10.8702 23.7999L0.978516 14.6533L14.3569 13.0666L20.0002 0.833252L25.6435 13.0666L39.0219 14.6533L29.1302 23.7999L31.7552 37.0133L20.0002 30.4333ZM20.0002 26.6133L27.0785 30.5749L25.4969 22.6199L31.4519 17.1116L23.3969 16.1566L20.0002 8.79159L16.6035 16.1583L8.54852 17.1116L14.5035 22.6199L12.9218 30.5749L20.0002 26.6133Z" fill="#F4683F" />
                </svg>

                <p>Средний рейтинг компании 4,5 из 5 (Avito, Google, Отзовик)</p>
            </div>
        </div>

    );
};

export default AboutUs;