const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
/**
 * @openapi
 * tags:
 *   name: Orders
 *   description: APIs related to orders
 */

/**
 * @openapi
 * /api/order:
 *   get:
 *     summary: Retrieve all orders
 *     description: Retrieve all orders from the database.
 *     tags:
 *        [Orders]
 *     responses:
 *       '200':
 *         description: Successfully retrieved orders
 *       '404':
 *         description: Orders not found
 */

router.get("/order", orderController.getOrder);
/**
 * @openapi
 * /api/order/{id}:
 *   get:
 *     description: Retrieve a single order by ID
 *     tags:
 *       [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Order ID
 *     responses:
 *       200:
 *         description: Successfully retrieved the order
 *       404:
 *         description: Order not found
 */
router.get("/order/:id", orderController.getOrderById);
/**
 * @openapi
 * /api/new:
 *   post:
 *     summary: Create a new order
 *     description: Create a new order with the specified details.
 *     tags:
 *       [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *          
 *            
 *     responses:
 *       '201':
 *         description: Order successfully created
 *       '400':
 *         description: Unable to create order
 */
router.post("/new", orderController.createOrder);

module.exports = router;
