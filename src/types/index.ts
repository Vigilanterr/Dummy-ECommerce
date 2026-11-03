export type Product = {
    id: number;
    name: string;
    price: number;
    category: string;
    description: string;
    image: string;
};

export interface CartItem extends Product {
    quantity: number;
}
