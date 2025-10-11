import MyNavbar from "@/components/layout/navbar";

export default function ProductsPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <MyNavbar />
      {children}
    </section>
  );
}
