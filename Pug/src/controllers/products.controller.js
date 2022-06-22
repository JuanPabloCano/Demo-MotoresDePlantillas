const products = []

const getProducts = (req, res) => {
    res.render('main.pug', { products })
}

const addProducts = (req, res) => {
    products.push(req.body);
    res.redirect('/productos')
}

module.exports = { getProducts, addProducts }