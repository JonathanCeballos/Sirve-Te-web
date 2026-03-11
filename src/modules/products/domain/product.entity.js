//src/modules/products/domain/product.entity.js

export class Product {
    constructor(id, name, price, category, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category; // 'café', 'bebida', 'snack'
        this.image = image;
    }
}