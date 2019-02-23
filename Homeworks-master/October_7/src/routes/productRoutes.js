const express = require('express');
const router = express.Router();


let id = 1;

let products = [
    { id: id++, title: "Apple", price: 100000 },
    { id: id++, title: "Google", price: 10000 },
    { id: id++, title: "Nokia", price: 3000 }
];


router.get('/', (req, res) => {
    res.render('products/index', { title: 'Products Page', products });
});


router.get('/add', (req, res) => {
    res.json({ message: "Products Add Page" });
});

router.get('/:id(\\d)', (req, res) => {
    const id = req.params.id;
    const product = products.find(prod => prod.id == id);
    res.render('products/detail', { title: 'Products Page', product });
});

module.exports.router = router;

module.exports.products = products;