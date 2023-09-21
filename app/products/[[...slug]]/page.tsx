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
      <h1>
        Product Page with dynamic slug or search params like ?sortOrder=name:{" "}
        {slug} -- {sortOrder}
      </h1>
    </>
  );
};
export default ProductPage;
