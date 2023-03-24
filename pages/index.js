import Image from "next/image";
import Layout from "../components/layout/Layout";
import ProductGrid from "../components/products/ProductGrid";
import lgImage from "../public/images/banner/jezael-melgoza-1.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";

function Home() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  const scrollRef = useRef(null);

  const executeScroll = () => scrollRef.current.scrollIntoView();

  return (
    <Layout title="Home page">
      <div className="relative" data-aos="fade-up">
        <div className="absolute w-full h-full bg-gradient-to-b from-slate-900/90 to-white/10 backdrop-blur-[3px] sm:backdrop-blur-sm" />
        <Image
          src={lgImage}
          width={700}
          height={350}
          alt="bg-shop"
          className="h-[550px] md:h-[600px] lg:h-[750px] 2xl:h-[890px] w-full"
        />
        <div className="absolute inset-0 space-y-3 flex justify-center items-center">
          <div className="w-4/5 h-3/4 space-y-9 text-center">
            <h1 className=" text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
              Bit Code Shop
            </h1>
            <p className="text-white sm:text-base px-5 md:text-lg lg:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <button
            className="absolute bottom-16 cursor-pointer"
            onClick={executeScroll}
          >
            <ChevronDoubleDownIcon className=" w-12 lg:w-20 text-blue-800" />
          </button>
        </div>
      </div>
      <ProductGrid scrollRef={scrollRef} />
    </Layout>
  );
}

export default Home;
