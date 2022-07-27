const { Router } = require("express");
const router = Router();

const tryCatch = require("../middlewares/tryCatch");

const {
  userSignup, // 유저 회원 가입
} = require("../controllers/index");

router.post("/signup", tryCatch(userSignup));

module.exports = router;
