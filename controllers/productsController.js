const Product = require('./../models/product');

function get(req, res) {
  Product.find({})
  .then(product => {
    res.json(product)
    console.log(product)
  })
}

module.exports = {
  get
}