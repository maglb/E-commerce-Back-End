// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Product.belongsTo(Category, {
  foreignKey: '',
  onDelete: 'CASCADE',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: '',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.hasMany(ProductTag, {
  foreignKey: '',
  onDelete: 'CASCADE',
});

// Tags belongToMany Products (through ProductTag)

Tags.belongsToMany(ProductTag, {
  foreignKey: '',
  onDelete: 'CASCADE',
});

module.exports = { Driver, License, Car };

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
