const express = require('express');
const app = express();
const routes = require('./src/routes/products.routes')
const path = require('path')
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, './src/views'))
app.set('view engine', 'ejs')

app.use('/', routes)

app.listen(port, () => {
    console.log(`Servidor escuchando el puerto ${port}`);
});