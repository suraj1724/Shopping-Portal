// routes/taskRoutes.js

const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/', taskController.getAllProducts);
router.post('/product', taskController.createProduct);
router.get('/product/:id', taskController.getProductById);
router.put('/product/:id', taskController.updateProduct);
router.delete('/product/:id', taskController.deleteProduct);

module.exports = router;

