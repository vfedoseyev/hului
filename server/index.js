// server/index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Маршрут для регистрации нового пользователя
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    // Здесь должна происходить проверка и сохранение данных пользователя в базе данных
    console.log(`User ${username} registered with password ${password}`);

    res.status(200).json({ message: 'Registration successful' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});