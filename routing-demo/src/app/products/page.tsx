import Link from "next/link";

export default function productList() {
  const productId = 100;

  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product listing</h1>
      <p>
        <Link href="products/1">Product 1</Link>
      </p>
      <p>
        <Link href="products/2">Product 2</Link>
      </p>
      <p>
        <Link href="products/3" replace>
          Product 3
        </Link>
      </p>
      <p>
        <Link href={`products/${productId}`}>Product {productId}</Link>
      </p>
    </>
  );
}
