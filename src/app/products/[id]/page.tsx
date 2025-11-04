import ProductDetail from "@/components/layout/product/productDetail/productDetail";
import { products } from "@/data/products";

export default async function ProductsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p className="text-center py-20">Producto no encontrado</p>;
  }

  return (
    <div>
      <ProductDetail product={product} />
    </div>
  );
}
