export interface CartResponse {
    carts: [],
    total: number,
    skip: number,
    limit: number
}

export interface CartInnerData {
    discountedTotal: number,
    id: 1,
    products: [],
    total: number,
    totalProducts: number,
    totalQuantity: number,
    userId: number,
}

export interface PerticularProduct {
    "id": number,
    "title": string,
    "price": number,
    "quantity": number,
    "total": number,
    "discountPercentage": number,
    "discountedTotal": number,
    "thumbnail": string
}