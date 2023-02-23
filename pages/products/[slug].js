import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../../components/layout/Layout";
import productItems from "../../data/products.json";

const ProductPage = () => {
  const { query } = useRouter();
  const { slug } = query;

  const product = productItems.find((item) => item.slug === slug);

  return (
    <div>
      <Layout title={product && product.title}>
        {!product ? (
          <div className=" w-full h-full flex justify-center items-center">
            <h1 className="m-auto text-3xl font-semibold">Product not found</h1>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 rounded-xl border border-double border-slate-200 mx-2 p-10">
            <div className="flex justify-center items-start">
              <Image
                className="rounded-xl"
                src={product.image}
                width={340}
                height={340}
                alt="details"
              />
            </div>
            <div className="lg:col-span-2 px-5">
              <div>
                <h2 className="text-2xl">{product.title}</h2>
                <p className="text-gray-400">{product.category}</p>
                <div className="my-8 py-3 px-8 rounded-xl border border-dashed">
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
            <div className="p-5 h-full flex flex-col justify-between max-h-[400px] md:mt-6">
              <div>
                <div className="mb-2 flex justify-between">
                  <span>Price:</span>
                  <span>$ {product.price}</span>
                </div>
                <div className="mb-2 flex justify-between">
                  <span>Status:</span>
                  <span
                    className={`${
                      product.count > 0 ? "text-blue-500" : "text-red-500"
                    }`}
                  >
                    {product.count > 0 ? `Available` : "Unavailable"}
                  </span>
                </div>
                {product.count ? (
                  <div className="mb-2 flex justify-between">
                    <span>Count:</span>
                    <span>{product.count}</span>
                  </div>
                ) : null}
              </div>
              <button
                disabled={product.count > 0 ? false : true}
                className="rounded-lg bg-blue-500 hover:bg-blue-600 text-white py-2 w-full 
              focus:ring focus:ring-blue-400 focus:ring-offset-2 transition disabled:cursor-not-allowed
              disabled:bg-slate-200 mt-4"
              >
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </Layout>
    </div>
  );
};

export default ProductPage;
