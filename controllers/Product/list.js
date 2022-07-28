// 상품 리스트 get
/**
 * @swagger
 *  /product/list:
 *    get:
 *      tags:
 *      - product
 *      summary: 상품 목록
 *      description: 상품 목록
 *      consumes:
 *      - application/json
 *      produces:
 *      - application/json
 */

const { Product } = require("../../models/product");
const { unknownError } = require("../../error/errorcode");

module.exports = async (req, res, next) => {
  Product.find((err, productList) => {
    if (err) {
      return next(unknownError);
    }

    return res.status(200).send({
      message: "상품 리스트 요청",
      data: productList,
    });
  });
};
