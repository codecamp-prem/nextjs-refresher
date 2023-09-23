import Link from "next/link";
import ProductTable from "./ProductTable";

interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}
const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <>
      <h1 className="font-poppins">
        Product Page wih dynamic slug or search params like ?sortOrder=name:{" "}
        {slug} -- {sortOrder}
      </h1>
      <>
        <h1>Users</h1>
        {/* <Link href="/products/new" className="btn">
        New User
      </Link> */}
        <ProductTable sortOrder={sortOrder} />
      </>
    </>
  );
};
export default ProductPage;
