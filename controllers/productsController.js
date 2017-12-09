const Product = require('./../models/product');

function get(req, res) {
  Product.find({})
  .then(product => {
    res.json(product)
    
  //   , (err, data) => {
  //   console.log(data)
  // })
  })
}

module.exports = {
  get
}