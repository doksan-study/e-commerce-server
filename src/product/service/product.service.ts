import { Injectable } from '@nestjs/common';
import { ProductRequestDto } from '../dto/product.request.dto';
import { ProductRepository } from '../infra/product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  //** 상품 전체 조회 */
  async getAllProduct() {
    const allProduct = await this.productRepository.findAllProduct();
    return allProduct;
  }

  //** 상품 상세 */
  async getProductDetail(id: string) {
    const productDetail = await this.productRepository.findProductDetail(id);
    return productDetail;
  }

  //** 상품 등록 */
  async create(body: ProductRequestDto) {
    const { name, description, price } = body;

    const product = await this.productRepository.create({
      name,
      description,
      price,
    });

    return product;
  }
}
