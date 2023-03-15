import Product from "./ProductItem";
import productItems from "../../data/products.json";

const ProductGrid = () => {
  return (
    <div className="rounded-2xl py-14 md:px-20 mx-2 grid px-10 sm:grid-cols-2 gap-12 lg:gap-14 2xl:gap-20 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2">
      {productItems.map((pItem) => (
        <Product key={pItem.slug} itemData={pItem} />
      ))}
    </div>
  );
};

export default ProductGrid;
