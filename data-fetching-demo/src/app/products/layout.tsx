export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const productResponse = await fetch("http://localhost:3001/products");
  const products = await productResponse.json();
  console.log({ products });
  return <>{children}</>;
}
