// 상품 상세 get
const { unknownError, notFoundProduct } = require("../../error/errorcode");
const { Product } = require("../../models/product");

/**
 * @swagger
 *  /product/:id:
 *    get:
 *      tags:
 *      - product
 *      summary: 상품 상세
 *      description: 상품 상세
 *      consumes:
 *      - application/json
 *      produces:
 *      - application/json
 *      parameters:
 *        - in: params
 *          name: productId
 *          required: true
 *          description : 상품 id
 */

module.exports = async (req, res, next) => {
  const objectId = req.params.id;

  Product.findById({ _id: objectId }, (err, info) => {
    if (err) {
      return next(unknownError);
    }

    if (!info) {
      return next(notFoundProduct);
    }

    return res.status(200).send({
      message: "상품 상세 요청",
      data: info,
    });
  });
};
