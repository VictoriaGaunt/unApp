export interface ProductItem {
    id: number;
    name: string;
    image: string;
}

export interface ProductCarouselWidgetProps {
    products: ProductItem[];
}