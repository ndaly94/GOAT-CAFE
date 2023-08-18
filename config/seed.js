require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Hot Wraps', sortOrder: 10},
    {name: 'Cold Wraps', sortOrder: 20},
    {name: 'Old Wraps', sortOrder: 30},
    {name: 'Rap Wraps', sortOrder: 40},
    {name: 'Dessert Wraps', sortOrder: 50},
    {name: 'Drink Wraps', sortOrder: 60},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Hamburger Wrap', emoji: '🌯', category: categories[0], price: 5.95},
    {name: 'Turkey & Brie Wrap', emoji: '🌯', category: categories[1], price: 6.95},
    {name: 'Monte Cristo Wrap', emoji: '🌯', category: categories[0], price: 3.95},
    {name: 'Freddie Gibbs Wrap', emoji: '🌯', category: categories[3], price: 11.95},
    {name: 'Biigie Smalls Wrap', emoji: '🌯', category: categories[3], price: 13.95},
    {name: '50 Cent Wrap', emoji: '🌯', category: categories[3], price: .50},
    {name: 'Taco Wrap', emoji: '🌯', category: categories[0], price: 4.95},
    {name: 'Burrito (Basically a wrap already)', emoji: '🌯', category: categories[4], price: 4.95},
    {name: 'Regis Philbin Wrap', emoji: '👴🏻', category: categories[2], price: 3.95},
    {name: 'Sam Jackson Wrap', emoji: '🧓🏾', category: categories[2], price: 7.95},
    {name: 'Betty White Wrap', emoji: '👵🏻', category: categories[2], price: 1.95},
    {name: 'Ghost Face Killah Wrap', emoji: '🌯', category: categories[3], price: 2.95},
    {name: 'Green Salad Wrap', emoji: '🌯', category: categories[1], price: 3.95},
    {name: 'Ice Cream Wrap', emoji: '🌯', category: categories[4], price: 1.95},
    {name: 'Cup Cake Wrap', emoji: '🌯', category: categories[4], price: 0.95},
    {name: 'Custard Wrap', emoji: '🌯', category: categories[4], price: 2.95},
    {name: 'Strawberry Shortcake Wrap', emoji: '🌯', category: categories[4], price: 3.95},
    {name: 'Milk Wrap', emoji: '🌯', category: categories[5], price: 0.95},
    {name: 'Coffee Wrap', emoji: '🌯', category: categories[5], price: 0.95},
    {name: 'Mai Tai (Alcohol is bad)', emoji: '🍹', category: categories[5], price: 8.95},
    {name: 'Beer (Alcohol is really bad)', emoji: '🍺', category: categories[5], price: 3.95},
    {name: 'Wine (Like seriously how is alcohol legal when other drugs arent)', emoji: '🍷', category: categories[5], price: 7.95},
  ]);

  console.log(items)

  process.exit();

})();