const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

/**
 * @openapi
 * /api/products:
 *   get:
 *     description: Retrieve all products
 *     responses:
 *       200:
 *         description: Successfully retrieved products
 *       404:
 *         description: Products not found
 */
router.get("/products", productController.getAllProducts);

/**
 * @openapi
 * /api/products/{id}:
 *   get:
 *     description: Retrieve a single product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Product ID
 *     responses:
 *       200:
 *         description: Successfully retrieved the product
 *       404:
 *         description: Product not found
 */
router.get("/products/:id", productController.getProductById);

/**
 * @openapi
 * /api/products:
 *   post:
 *     description: Create a new product
 *     responses:
 *       201:
 *         description: Product successfully created
 *       400:
 *         description: Unable to create product
 */
router.post("/products", productController.createProduct);

/**
 * @openapi
 * /api/products/{id}:
 *   put:
 *     description: Update a product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Product ID
 *     responses:
 *       200:
 *         description: Product successfully updated
 *       400:
 *         description: Unable to update product
 *       404:
 *         description: Product not found
 */
router.put("/products/:id", productController.updateProduct);

/**
 * @openapi
 * /api/products/{id}:
 *   delete:
 *     description: Delete a product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Product ID
 *     responses:
 *       204:
 *         description: Product successfully deleted
 *       404:
 *         description: Product not found
 */
router.delete("/products/:id", productController.deleteProduct);

module.exports = router;