const products = []

const getProducts = (req, res) => {
    res.render('product.hbs', { products })
}

const addProducts = (req, res) => {
    products.push(req.body);
    res.redirect('/productos')
}

module.exports = { getProducts, addProducts }