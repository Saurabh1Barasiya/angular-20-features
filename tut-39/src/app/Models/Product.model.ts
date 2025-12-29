export interface ProductResponse {
    products: [],
    limit: number,
    skip: number,
    totel: number,
}

export interface ActualProduct {
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    tags: string[]
}