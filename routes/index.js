const { Router } = require("express");
const router = Router();

const user = require("./user");
const product = require("./product");

router.use("/user", user);
router.use("/product", product);

module.exports = router;
