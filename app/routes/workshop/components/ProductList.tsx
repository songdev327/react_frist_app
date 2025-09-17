import { useState } from "react";
import type { ProductInterface } from "../../../interface/ProductInterface";
import ProductBox from "./ProductBox";

export default function ProductList() {
  const productList = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    price: (index + 1) * 100,
  }));

  const [products, setProducts] = useState<ProductInterface[]>(productList);

  return (
    <div>
      <h1>Product List</h1>
      <div className="grid grid-cols-6 gap-4">
        {products.map((product: ProductInterface) => (
          <ProductBox key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
