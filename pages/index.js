import Image from "next/image";
import Layout from "../components/layout/Layout";
import ProductGrid from "../components/products/ProductGrid";
import img from "../public/images/jezael-melgoza.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <Layout title="Home page">
      <div className="relative">
        <div className="absolute w-full h-full bg-black/60 backdrop-blur-sm" />
        <div
          className="absolute top-[8%] left-[5%] lg:left-[15%] lg:right-[15%] right-[5%] space-y-3 xl:space-y-20"
          data-aos="zoom-in"
        >
          <h1 className=" text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
            Bit Code Shop
          </h1>
          <p className="xl:w-3/4 text-white text-sm sm:text-base md:text-lg px-10 lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <Image
          src={img}
          width={700}
          height={350}
          alt="bg-shop"
          className="h-[300px] md:h-[400px] lg:h-auto w-full"
        />
      </div>
      <ProductGrid />
    </Layout>
  );
}

export default Home;
