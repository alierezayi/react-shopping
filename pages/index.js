import Image from "next/image";
import Layout from "../components/layout/Layout";
import ProductGrid from "../components/products/ProductGrid";
import img from "../public/images/heidi-fin-2TLREZi7BUg-unsplash.jpg";

function Home() {
  return (
    <Layout title="Home page">
      <div className="relative">
        <div className="absolute w-full h-full bg-black/60"></div>
        <Image src={img} width={700} height={350} alt="bg" className="w-full" />
      </div>
      <ProductGrid />
    </Layout>
  );
}

export default Home;
