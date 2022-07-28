// product 라우터
const { Router } = require("express");
const router = Router();

const tryCatch = require("../middlewares/tryCatch");

const {
  productCreate, //
  productDelete,
  productDetail,
  productList,
} = require("../controllers/index");

// 상품 등록
router.post("/create", tryCatch(productCreate));

// 상품 삭제
router.delete("/delete", tryCatch(productDelete));

// 상품 리스트
router.get("/list", tryCatch(productList));

// 상품 상세
router.get("/:id", tryCatch(productDetail));

module.exports = router;
