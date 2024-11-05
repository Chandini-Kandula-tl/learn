export default function productId({
  params,
}: {
  params: { productId: number };
}) {
  return (
    <>
      <p>Details adout product {params.productId}</p>
    </>
  );
}
