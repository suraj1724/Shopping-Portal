// src/index.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use('/', taskRoutes);
console.log(app, "app is console")

mongoose.connect('mongodb://localhost:27017/shopping_portal', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => console.error('Error connecting to MongoDB:', err));
