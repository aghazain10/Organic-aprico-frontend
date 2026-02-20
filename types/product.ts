export interface Product {
    id: string;
    name: string;
    image: string;
    price?: number; // undefined for custom
    description?: string;
    badge?: string; // optional: "Best Seller", "Popular", etc.
    isCustom?: boolean;
}
