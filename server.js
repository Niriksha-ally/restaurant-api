// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// In-memory menu data (at least 6 items, 3 categories, veg + non-veg)
const menu = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "Main Course",
    price: 350,
    isVegetarian: true,
    description: "Classic pizza with tomato, basil and mozzarella"
  },
  {
    id: 2,
    name: "Butter Chicken",
    category: "Main Course",
    price: 420,
    isVegetarian: false,
    description: "Creamy tomato based chicken curry served with naan"
  },
  {
    id: 3,
    name: "Paneer Tikka",
    category: "Appetizer",
    price: 260,
    isVegetarian: true,
    description: "Smoky grilled paneer cubes marinated in spices"
  },
  {
    id: 4,
    name: "Fish Fry",
    category: "Appetizer",
    price: 300,
    isVegetarian: false,
    description: "Crispy spiced fried fish served with lemon"
  },
  {
    id: 5,
    name: "Gulab Jamun",
    category: "Dessert",
    price: 120,
    isVegetarian: true,
    description: "Soft milk dumplings soaked in sugar syrup"
  },
  {
    id: 6,
    name: "Masala Chai",
    category: "Beverage",
    price: 80,
    isVegetarian: true,
    description: "Hot aromatic tea brewed with spices"
  }
];

// Middleware to serve static files from 'public'
app.use(express.static(path.join(__dirname, 'public')));

// 1) GET /menu -> return all menu items
app.get('/menu', (req, res) => {
  res.json(menu);
});

// 2) GET /menu/vegetarian -> return only vegetarian items
app.get('/menu/vegetarian', (req, res) => {
  const vegItems = menu.filter(item => item.isVegetarian === true);
  res.json(vegItems);
});

// 3) GET /menu/categories -> returns categories with itemCount
app.get('/menu/categories', (req, res) => {
  const counts = menu.reduce((acc, item) => {
    const cat = item.category;
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {});

  const categories = Object.keys(counts).map(name => ({
    name,
    itemCount: counts[name]
  }));

  res.json({ categories });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
