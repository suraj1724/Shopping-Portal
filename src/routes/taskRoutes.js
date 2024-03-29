

const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');


router.get('/product/updated-last-24-hours', taskController.getProductsUpdatedLast24Hours);
router.get('/', taskController.getAllProducts);
router.post('/product', taskController.createProduct);
router.get('/product/:id', taskController.getProductById);
router.put('/product/:id', taskController.updateProduct);
router.delete('/product/:id', taskController.deleteProduct);
router.get('/product/status/:status', taskController.getProductsByStatus);
router.get('/product/updated-last-24-hours', taskController.getProductsUpdatedLast24Hours);

module.exports = router;

