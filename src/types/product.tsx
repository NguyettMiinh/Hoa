export type Product = {
    id: number;
    name: string;
    img: string[];
    price: string;
    stock?: number | 0;
}

export type ProductItem = string;
export interface SubCategory {
    title: string;
    items: ProductItem[];
}
export interface Category {
    title: string;
    subCategories: SubCategory[];
}
