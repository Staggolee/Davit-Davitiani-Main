const express = require('express');
const path = require('path');
const App = express();
const router = require('./src/routes/productRoutes');
const products = router.router;
const productsDB  = router.products;

const PORT = 3000;



App.set('view engine', 'pug');
App.set('views', './src/views');

App.use(express.static(path.join(__dirname, 'public')));
App.use(express.urlencoded({ extended: true }));
App.use('/products', products);


App.get('/', (req, res) => {
    res.render('index', { title: "Demo Title", added: false, productsDB });
});


App.post('/', (req, res) => {
    const { name, id, price } = req.body;
    productsDB.push({
        name,
        id,
        price
    });
    res.render('index', { title: "Demo Title", added: true, productsDB });
});



App.listen(PORT, () => {
    console.log(`Server PORT - ${PORT}`);
});