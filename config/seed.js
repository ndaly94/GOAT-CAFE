require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Wraps', sortOrder: 10},
    {name: 'Hot Wraps', sortOrder: 20},
    {name: 'Cold Wraps', sortOrder: 30},
    {name: 'Old Wraps', sortOrder: 40},
    {name: 'Rap Wraps', sortOrder: 50},
    {name: 'Dessert Wraps', sortOrder: 60},
    {name: 'Drink Wraps', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Hamburger Wrap', emoji: '🍔', category: categories[1], price: 5.95},
    {name: 'Turkey Wrap', emoji: '🥪', category: categories[0], price: 6.95},
    {name: 'Hot Dog Wrap', emoji: '🌭', category: categories[1], price: 3.95},
    {name: 'Crab Wrap', emoji: '🦀', category: categories[4], price: 14.95},
    {name: 'Fried Shrimp Wrap', emoji: '🍤', category: categories[4], price: 13.95},
    {name: 'Whole Lobster Wrap', emoji: '🦞', category: categories[4], price: 25.95},
    {name: 'Taco Wrap', emoji: '🌮', category: categories[1], price: 1.95},
    {name: 'Burrito (Basically a wrap already)', emoji: '🌯', category: categories[5], price: 4.95},
    {name: 'Pizza Wrap', emoji: '🍕', category: categories[3], price: 3.95},
    {name: 'Spaghetti Wrap', emoji: '🍝', category: categories[3], price: 7.95},
    {name: 'Garlic Bread Wrap', emoji: '🍞', category: categories[3], price: 1.95},
    {name: 'French Fry Wrap', emoji: '🍟', category: categories[4], price: 2.95},
    {name: 'Green Salad Wrap', emoji: '🥗', category: categories[2], price: 3.95},
    {name: 'Ice Cream Wrap', emoji: '🍨', category: categories[5], price: 1.95},
    {name: 'Cup Cake Wrap', emoji: '🧁', category: categories[5], price: 0.95},
    {name: 'Custard Wrap', emoji: '🍮', category: categories[5], price: 2.95},
    {name: 'Strawberry Shortcake Wrap', emoji: '🍰', category: categories[5], price: 3.95},
    {name: 'Milk Wrap', emoji: '🥛', category: categories[6], price: 0.95},
    {name: 'Coffee Wrap', emoji: '☕', category: categories[6], price: 0.95},
    {name: 'Mai Tai (Alcohol is bad)', emoji: '🍹', category: categories[6], price: 8.95},
    {name: 'Beer (Alcohol is really bad)', emoji: '🍺', category: categories[6], price: 3.95},
    {name: 'Wine (Like seriously how is alcohol legal when other drugs arent)', emoji: '🍷', category: categories[6], price: 7.95},
  ]);

  console.log(items)

  process.exit();

})();