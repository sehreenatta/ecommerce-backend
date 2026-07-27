const express = require('express');
const router = express.Router();
const {
  createOrder,
  getMyOrders,
  getOrders,
  updateOrderStatus,
} = require('../controllers/orderController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

router.route('/').post(protect, createOrder).get(protect, adminOnly, getOrders);
router.route('/myorders').get(protect, getMyOrders);
router.route('/:id/status').put(protect, adminOnly, updateOrderStatus);

module.exports = router;
