// routes/taskRoutes.js

const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/', taskController.getAllProducts);
router.post('/product', taskController.createProduct);
router.get('/:id', taskController.getProductById);
router.put('/:id', taskController.updateProduct);
router.delete('/:id', taskController.deleteProduct);

module.exports = router;

