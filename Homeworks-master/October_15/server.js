const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');

const PORT = process.env.PORT || 3000;


const products = [
    { id: 1, name: 'Graphics Card', price: 95.96, description: "Best Graphics Card" },
    { id: 2, name: 'HDMI Cable', price: 8.99, description: "Quality HDMI Cable" },
    { id: 3, name: 'SSD Drive', price: 299, description: "Kingston SSD 1TB" }
];


app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: 'online-shop',
    resave: true,
    saveUninitialized: false
}));


app.set('views', './src/views');
app.set('view engine', 'pug');



app.get('/', (req, res) => {
    res.render('index', { title: 'Home', message: 'Choose Desired Products' });
});


app.get('/product/:id(\\d)', (req, res) => {
    const id = req.params.id;
    const product = products.find(p => p.id == id);
    res.render('detail', {
        title: product.name,
        product
    });
});


app.post('/product/:id(\\d)', (req, res) => {
    const id = req.params.id;
    const product = products.find(p => p.id == id);
    if (!req.session.cart) {
        req.session.cart = {};
    }
    if (!req.session.cart[id]) {
        const { name, price } = product;
        const cartProduct = {
            name,
            price,
            quantity: 0
        };
        req.session.cart[id] = cartProduct;
    }
    req.session.cart[id].quantity += Number(req.body.quantity);
    res.render('detail', {
        title: product.name,
        product
    });
});


app.get('/summary', (req, res) => {
    res.render('summary', {
        title: "Cart",
        message: "Summary",
        shopCart: req.session.cart || []
    });
});


app.listen(PORT, () => {
    console.log(`Server on - ${PORT}`);
});