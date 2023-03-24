import Product from "./ProductItem";
import productItems from "../../data/products.json";

const ProductGrid = () => {
  return (
    <div className="container m-auto px-1 mt-10" data-aos="fade-up" data-aos-duration="1000">
      <h1 className="text-3xl border-b px-3 py-6 font-bold mb-6">Products</h1>
      <div className="rounded-2xl divide-y-14 md:px-20 mx-2 grid px-10 sm:grid-cols-2 gap-12 lg:gap-14 2xl:gap-20 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2">
        {productItems.map((pItem) => (
          <Product key={pItem.slug} itemData={pItem} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
