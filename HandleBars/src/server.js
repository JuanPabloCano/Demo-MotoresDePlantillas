const express = require('express');
const app = express();
const routes = require('./routes/products.routes')
const { engine } = require('express-handlebars');
const path = require('path')
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: path.join(__dirname, './views/layout/index.hbs'),
    layoutsDir: path.join(__dirname, './views/layout'),
    partialsDir: path.join(__dirname, './views/partials/form.hbs')
}))

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'hbs')

app.use('/', routes)

app.listen(port, () => {
    console.log(`Servidor escuchando el puerto ${port}`);
});