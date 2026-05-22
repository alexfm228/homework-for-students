interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
}

type ProductPreview = Pick<Product, 'title' | 'price'>;

type ProductWithoutDescription = Omit<Product, 'description'>;
