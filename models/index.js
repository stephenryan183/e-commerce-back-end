// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsToMany(Tag, {
  through: ProductTag,

  foreignKey: 'product_id',
  unique: false
});

Tag.belongsToMany(Product, {
  thorugh: ProductTag,

  foreignKey:'tag_id',
  unique:false
});






// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
