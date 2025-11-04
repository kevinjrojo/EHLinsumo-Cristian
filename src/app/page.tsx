import SearchBar from "@/components/layout/navbar/searchBar";
import ProductGrid from "@/components/layout/product/productGrid/productGrid";

export default function Home() {
  return (
    <main className="px-4 py-8">
      <div className="sm:hidden mb-4">
        <SearchBar />
      </div>
      <ProductGrid />
    </main>
  );
}
