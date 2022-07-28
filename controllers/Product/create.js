// 상품 생성
const { unknownError } = require("../../error/errorcode");
const { Product } = require("../../models/product");

/**
 * @swagger
 *  /product/create:
 *    post:
 *      tags:
 *      - product
 *      summary: 상품 등록
 *      description: 상품 등록
 *      consumes:
 *      - application/json
 *      produces:
 *      - application/json
 *      parameters:
 *        - in: body
 *          name: Body
 *          required: true
 *          description :
 *          schema:
 *              $ref: "#/definitions/productCreate"
 */
module.exports = async (req, res, next) => {
  const product = new Product(req.body);

  product.save((err, productInfo) => {
    if (err) {
      return next(unknownError);
    }
    return res.status(200).send({
      message: "상품 등록 성공",
      data: productInfo,
    });
  });
};
