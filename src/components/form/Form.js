import React, { useState } from 'react';
import './Form.css';

const Form = ({ isVisible, closeForm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState(null);

    // Функция для проверки ввода только русских букв
    const onlyRussianLetters = (value) => {
        return value.replace(/[^а-яА-ЯёЁ\s]/g, '');
    };

    // Функция для ограничения ввода только числами и "+", длиной до 12 символов
    const onlyNumbersAndPlusSign = (value) => {
        return value.replace(/[^+\d]/g, '').slice(0, 12);
    };

    const handleNameChange = (e) => {
        const newValue = onlyRussianLetters(e.target.value);
        setName(newValue);
    };

    const handlePhoneChange = (e) => {
        const newValue = onlyNumbersAndPlusSign(e.target.value);
        setPhone(newValue);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (!name || phone.length !== 12) {
            setError('Заполните все поля корректно');
            return;
        }

        console.log('Отправленные данные:', { name, phone });
        // Здесь можно добавить логику для обработки данных, например, отправка на сервер
        setError(null); // Сброс ошибки после успешной отправки
        closeForm(); // Закрываем форму после успешной отправки
    };

    return (
        <div className={`overlay ${!isVisible ? 'hidden' : ''}`}>
            <div className="form-container">
                <form className='form' onSubmit={handleSubmit}>
                    <h2>Оставьте заявку</h2>
                    <p>С вами свяжется специалист, поможет рассчитать стоимость и проконсультирует по всем вопросам</p>
                    <input 
                        placeholder='Введите Ваше имя' 
                        type="text" 
                        value={name} 
                        onChange={handleNameChange}
                    />

                    <br />

                    <input 
                        placeholder='Номер телефона' 
                        type="tel" 
                        value={phone} 
                        onChange={handlePhoneChange}
                    />

                    <br />
                    
                    {error && <div style={{ color: 'red' }}>{error}</div>}

                    <button className='orange-btn' type="submit">Отправить</button>
                </form>
            </div>
        </div>
    );
};

export default Form;