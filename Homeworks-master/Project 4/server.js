const express = require("express");
const admin = require("./routes/api/admin");
const customers = require("./routes/api/customers");
const products = require("./routes/api/products");
const cors = require("cors");

const { json, urlencoded } = express;

const app = express();

// Get port
const PORT = process.env.PORT || 5000;

// Add middlewares
app.use(cors("*"));
app.use(urlencoded({ extended: true }));
app.use(json());

// Add routes
app.use("/api/admin", admin);
app.use("/api/customers", customers);
app.use("/api/products", products);

// @route   GET api/test
// @desc    Tests main route
// @access  Public
app.get("/api/test", (req, res) => {
  res.send("Welcome ECommerce");
});

app.listen(PORT, (req, res) => {
  console.log(`Listening on - ${PORT}`);
});
