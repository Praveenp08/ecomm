import express from "express";
import { getProducts , newProduct  } from "../controllers/productControllers.js";
import { updateProduct, deleteProduct, getProductDetails } from "../controllers/productControllers.js";
const router = express.Router();

router.route("/products").get(getProducts);
router.route("/admin/products").post(newProduct);

router.route("/products/:id").get(getProductDetails);
router.route("/products/:id").put(updateProduct);
router.route("/products/:id").delete(deleteProduct);

export default router;