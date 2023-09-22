import { sort } from "fast-sort";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: string;
}

interface Props {
  sortOrder: string;
}
const ProductTable = async ({ sortOrder }: Props) => {
  const res = await fetch("http://localhost:3000/api/products", {
    next: { revalidate: 10 },
  });
  const products: Product[] = await res.json();

  const sortedProducts = sort(products).asc(
    sortOrder === "price"
      ? (product) => product.price
      : (product) => product.name
  );

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>
              <Link href="/products?sortOrder=name">Name</Link>
            </th>
            <th>
              <Link href="/products?sortOrder=price">Price</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>#{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default ProductTable;
