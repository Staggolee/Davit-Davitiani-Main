const { Router } = require("express");
const PRODUCTS = require("../../db/products.json");

const { findOneById, findOneByIdAndRemove } = require("../../util/arrayLookup");

// Unique id generator based on timestamp
const uuidv1 = require("uuid/v1");

const router = new Router();

// @route   GET api/products[?filter | ?search]
// @desc    Get all/filtered/searched products
// @access  Public
router.get("/", filterMiddleware, searchMiddleware, (req, res) => {
  res.json(PRODUCTS);
});

// @route   GET api/products/:id
// @desc    Get product
// @access  Public
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const product = findOneById(id, PRODUCTS);
  if (!product) return res.status(404).send("No such product");
  res.json(product);
});

// @route   POST api/products
// @desc    Add new product
// @access  Public
router.post("/", (req, res) => {
  const ind = Math.floor(Math.random() * 9 + 1);

  const newProduct = {
    id: uuidv1(),
    name: req.body.name,
    price: Number(req.body.price),
    size: req.body.size,
    gender: req.body.gender,
    category: req.body.category,
    brand: req.body.brand,
    description: req.body.description,
    image: `/images/women/product-${ind}.jpg`,
  };

  console.log(newProduct);
  PRODUCTS.push(newProduct);
  res.json(newProduct);
});

// @route   DELETE api/products/:id
// @desc    Remove product
// @access  Public
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const removedProduct = findOneByIdAndRemove(id, PRODUCTS);
  if (!removedProduct)
    return res.status(404).json({ product: "No product with given id" });

  res.json({ removed: true, ...removedProduct });
});

// @route   PUT api/products/:id
// @desc    Update product
// @access  Public
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, price, brand, size, category } = req.body;

  const product = findOneById(id, PRODUCTS);
  if (!product) return res.status(404).json({ product: "No such product" });

  product.name = name;
  product.brand = brand;
  product.price = price;
  product.size = size;
  product.category = category;

  res.json(product);
});

function filterMiddleware(req, res, next) {
  if (!req.query.filters) return next();

  const filters = JSON.parse(req.query.filters);

  let filteredProducts = PRODUCTS;

  for (let filter in filters) {
    filteredProducts = filteredProducts.filter(prod => {
      if (filter === "price") {
        if (filters[filter]["min"] === "" && filters[filter]["max"] === "")
          return true; // if no input

        if (filters[filter]["max"] === "")
          return prod[filter] >= Number(filters[filter]["min"]); // if only min input

        if (filters[filter]["min"] === "")
          return prod[filter] <= Number(filters[filter]["max"]); // if only max input

        return (
          prod[filter] >= Number(filters[filter]["min"]) &&
          prod[filter] <= Number(filters[filter]["max"])
        );
      }

      if (filter == "brands") {
        // if user has filtered with brands
        if (filters[filter].length)
          return filters[filter].includes(prod["brand"]);

        return true;
      }

      if (filter == "category") {
        if (filters[filter] == "All categories") return true;

        return prod[filter] === filters[filter];
      }

      if (filter == "size") {
        if (filters[filter] == "Any size") return true;

        return prod[filter] === filters[filter];
      }
    });
  }

  res.json(filteredProducts);
}

function searchMiddleware(req, res, next) {
  if (!req.query.search) return next();

  // Search products
  const { search } = req.query;

  // We search product using its name
  const name = "name";
  const searchedProducts = PRODUCTS.filter(prod =>
    prod[name].toLowerCase().includes(search.toLowerCase())
  );

  res.json(searchedProducts);
}

module.exports = router;
