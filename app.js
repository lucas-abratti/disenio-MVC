const express = require('express');
const app = express();
const ejs = require('ejs')
const path = require('path');
const mainRouter = require('./routers/main.js');

app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('Server is live 3000');
});

const expressSatic = express.static(path.resolve(__dirname, 'public'));

app.use(expressSatic);

app.use('/', mainRouter);