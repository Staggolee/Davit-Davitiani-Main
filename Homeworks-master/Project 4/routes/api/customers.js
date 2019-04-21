const { Router } = require("express");
const CUSTOMERS = require("../../db/customers.json");
const PRODUCTS = require("../../db/products.json");
const { encrypt, passwordsMatch } = require("../../util/password");
const populateObject = require("../../util/populateObject");

const {
  findOneByUsername,
  findOneById,
  findOneByIdAndRemove,
} = require("../../util/arrayLookup");

// Unique id generator based on timestamp
const uuidv1 = require("uuid/v1");

const router = new Router();

// @route   GET api/customers
// @desc    Get all customers
// @access  Private (only admin)
router.get("/", (req, res) => {
  const populated = CUSTOMERS.filter(customer => !customer.isAdmin).map(
    customer => populateObject(customer, "id name email balance username")
  );
  res.json(populated);
});

// @route   GET api/customers/:id
// @desc    Get single customer
// @access  Private (only admin)
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const customer = findOneById(id, CUSTOMERS);
  if (!customer) return res.status(404).json({ user: "No user with given id" });

  // Get only certain details of customer
  const populated = populateObject(
    customer,
    "name username email balance birthdate shoppingCart purchasedProducts"
  );
  res.json(populated);
});

// @route   GET api/customers/:id/cart
router.get("/:id/cart", (req, res) => {
  const { id } = req.params;
  const customer = findOneById(id, CUSTOMERS);
  if (!customer) return res.status(404).json({ customer: "No Such Customer!" });

  const { shoppingCart } = customer;
  let cartItems = [];

  for (let { id, quantity } of shoppingCart) {
    const cartItem = { ...findOneById(id, PRODUCTS), quantity };
    cartItems.push(cartItem);
  }

  res.json(cartItems);
});

// @route   POST api/customers/:id/cart
router.post("/:id/cart", (req, res) => {
  const customerId = req.params.id;

  const customer = findOneById(customerId, CUSTOMERS);
  if (!customer) return res.status(404).json({ customer: "No Such Customer!" });

  // Product id
  const { id } = req.body;
  const { shoppingCart } = customer;

  // Find product if there is any with given id
  const cartProduct = findOneById(id, shoppingCart);

  if (cartProduct) cartProduct.quantity += 1;
  else shoppingCart.push({ id, quantity: 1 });

  res.json(shoppingCart);
});

// @route   PATCH api/customers/:id/cart
// @desc    For decreasing item quantity in cart
router.patch("/:id/cart/:prodId", (req, res) => {
  const { id, prodId } = req.params;

  const customer = findOneById(id, CUSTOMERS);
  if (!customer) return res.status(404).json({ customer: "No Such Customer!" });

  const { shoppingCart } = customer;

  const product = findOneById(prodId, shoppingCart);
  if (!product) return res.status(404).json({ product: "No such product" });

  if (product.quantity == 1) findOneByIdAndRemove(prodId, shoppingCart);
  else product.quantity -= 1;

  res.json(shoppingCart);
});

// @route   DELETE api/customers/:id/cart/:prod_id
router.delete("/:id/cart/:prodId", (req, res) => {
  const { id, prodId } = req.params;

  const customer = findOneById(id, CUSTOMERS);
  if (!customer) return res.status(404).json({ customer: "No Such Customer!" });

  const removedProd = findOneByIdAndRemove(prodId, customer.shoppingCart);
  if (!removedProd)
    return res.status(404).json({ product: "No such product in cart" });

  res.json(removedProd);
});

// @route   GET api/customers/:id/purchased
router.get("/:id/purchased", (req, res) => {
  const { id } = req.params;
  const customer = findOneById(id, CUSTOMERS);
  if (!customer) return res.status(404).json({ customer: "No Such Customer!" });

  const { purchasedProducts } = customer;
  let purchasedItems = [];

  for (let { id, quantity } of purchasedProducts) {
    const purchased = { ...findOneById(id, PRODUCTS), quantity };
    purchasedItems.push(purchased);
  }

  res.json(purchasedItems);
});

// @route   POST api/customers/:id/purchased
// @desc    Handle checkout requests when user purchases items
router.post("/:id/purchased", (req, res) => {
  const { id } = req.params;

  const customer = findOneById(id, CUSTOMERS);
  if (!customer) return res.status(404).json({ customer: "No Such Customer!" });

  const { shoppingCart, purchasedProducts } = customer;
  const { charge } = req.body;

  // Move items from cart to purchased
  for (let { id, quantity } of shoppingCart) {
    const prod = findOneById(id, purchasedProducts);
    if (prod) prod.quantity += quantity;
    else purchasedProducts.push({ id, quantity });
  }

  // Charge user from balance
  if (customer.balance - Number(charge) < 0)
    res.status(400).json({ balance: "User has no enough balance" });
  else customer.balance -= Number(charge) || 0;

  // Clear shopping cart
  shoppingCart.splice(0);

  const populated = populateObject(customer, "id name balance isAdmin");
  
  res.json(populated);
});

// @route   DELETE api/customers/:id/purchased/:prod_id
router.delete("/:id/purchased/:prodId", (req, res) => {
  const { id, prodId } = req.params;

  const customer = findOneById(id, CUSTOMERS);
  if (!customer) return res.status(404).json({ customer: "No Such Customer!" });

  const { purchasedProducts } = customer;

  const product = findOneById(prodId, purchasedProducts);
  if (!product) return res.status(404).json({ product: "No such product" });

  if (product.quantity == 1) findOneByIdAndRemove(prodId, purchasedProducts);
  else product.quantity -= 1;

  res.json(purchasedProducts);
});

// @route   POST api/customers
// @desc    Add new customer
// @access  Public
router.post("/", (req, res) => {
  if (req.body.password !== req.body.password2)
    return res.status(404).json({ password: "Passwords do not match!" });

  const newCustomer = {
    id: uuidv1(),
    name: req.body.name,
    email: req.body.email,
    balance: Number(req.body.balance),
    birthdate: req.body.birthdate,
    username: req.body.username,
    password: encrypt(req.body.password),
    shoppingCart: [],
    purchasedProducts: [],
  };
  CUSTOMERS.push(newCustomer);

  // Get only certain details of customer
  const populated = populateObject(newCustomer, "id name balance");
  res.json(populated);
});

// @route   DELETE api/customers/:id
// @desc    Remove customer
// @access  Private (only admin and customer)
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const removedCustomer = findOneByIdAndRemove(id, CUSTOMERS);
  if (!removedCustomer)
    return res.status(404).json({ customer: "No customer with given id" });

  res.json({ removed: true, name: removedCustomer.name });
});

// @route   POST api/customers/login
// @desc    Customer login
// @access  Public
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = findOneByUsername(username, CUSTOMERS);
  if (!user || !passwordsMatch(password, user.password))
    return res.status(404).json({ login: "Username or Password Incorrect" });

  const populated = populateObject(user, "id name balance isAdmin");

  res.json({ ...populated });
});

// @route   PUT api/customers/:id
// @desc    Update customer
// @access  Private (only admin)
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, username, email, birthdate } = req.body;

  const customer = findOneById(id, CUSTOMERS);
  if (!customer) return res.status(404).json({ customer: "No such customer" });

  customer.name = name;
  customer.email = email;
  customer.username = username;
  customer.birthdate = birthdate;

  res.json(populateObject(customer, "id name username balance"));
});

// @route   PUT api/customers/:id
// @desc    For managing user balance
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { charge } = req.body;

  const customer = findOneById(id, CUSTOMERS);
  if (!customer) return res.status(404).json({ customer: "No such customer" });

  if (customer.balance - Number(charge) < 0)
    res.status(400).json({ balance: "User has no enough balance" });
  else customer.balance -= Number(charge);

  res.json(populateObject(customer, "id name username balance"));
});

module.exports = router;
