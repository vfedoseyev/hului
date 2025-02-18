// src/components/RegisterForm.js
import React, { useState } from 'react';

export default function RegisterForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });

            if (!response.ok) {
                throw new Error('Failed to register user');
            }

            alert('Регистрация прошла успешно!');
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Имя пользователя:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <br />
            <label>
                Пароль:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button type="submit">Зарегистрироваться</button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
    );
}
