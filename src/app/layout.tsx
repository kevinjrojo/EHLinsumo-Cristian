import "../styles/globals.css";
import { inter } from "../styles/fonts";
import Navbar from "@/components/layout/navbar/navbar";
import { CartProvider } from "@/context/cardContext"; // 👈 importá el provider

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <CartProvider>
          {" "}
          {/* 👈 envuelve toda la app */}
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
