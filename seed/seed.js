const mongoose = require ('mongoose');
require('../config/database');
const sampleData = require('./sampleData');
const Product = require('./../models/product');

Product.remove({}).then(() => {
  return Product.create(sampleData)
})
.then(products => {
  console.log(products)
  mongoose.connection.close()
  process.exit()
})
.catch(err => console.log(err))