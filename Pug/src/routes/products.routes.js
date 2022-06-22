const { Router } = require('express')
const routes = Router()
const { getProducts, addProducts } = require('../controllers/products.controller')

routes.get('/productos', getProducts);
routes.post('/productos', addProducts);

module.exports = routes;