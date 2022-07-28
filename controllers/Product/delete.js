// 상품 삭제 delete
const { unknownError, notFoundProduct } = require("../../error/errorcode");
const { Product } = require("../../models/product");

/**
 * @swagger
 *  /product/delete:
 *    delete:
 *      tags:
 *      - product
 *      summary: 상품 삭제
 *      description: 상품 삭제
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
 *              $ref: "#/definitions/productDelete"
 */
module.exports = async (req, res, next) => {
  const { objectId } = req.body;

  Product.deleteOne({ _id: objectId }, (err, product) => {
    if (err) {
      return next(unknownError);
    }

    if (!product) {
      return next(notFoundProduct);
    }

    return res.status(200).send({
      message: "상품 삭제 요청",
      data: null,
    });
  });
};
