export interface CartReponse {
    carts: CartData[],
    total: number,
    skip: number;
    limit: number,
}

export interface CartData {
    id: number,
    products: ProductData[],
    total: number,
    discountedTotal: number,
    userId: number,
    totalProducts: number,
    totalQuantity: number
}

export interface ProductData {
    id: number,
    title: string,
    price: number,
    quantity: number,
    total: number,
    discountPercentage: number,
    discountedTotal: number,
    thumbnail: string
}
