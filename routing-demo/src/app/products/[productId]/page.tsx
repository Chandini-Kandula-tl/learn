type Props = { params: { productId: string } };
import { Metadata } from "next";
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};
export default function productId({ params }: Props) {
  return (
    <>
      <p>Details adout product {params.productId}</p>
    </>
  );
}
