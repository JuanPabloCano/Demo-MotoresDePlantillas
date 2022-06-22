const express = require('express');
const app = express();
const routes = require('./routes/products.routes')
const path = require('path')
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'pug')

app.use('/', routes)

app.listen(port, () => {
    console.log(`Servidor escuchando el puerto ${port}`);
});