import ProductItem from "./ProductItem";
import db from "../../utils/db";
import Product from "../../models/product";

const ProductGrid = ({ products, scrollRef }) => {
  console.log(products);
  return (
    <div
      className="container m-auto px-1"
      ref={scrollRef}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* <h1 className="text-3xl px-3 py-6 font-bold mb-6">Products</h1> */}
      <div className="rounded-2xl divide-y-14 py-8 md:px-20 mx-2 grid px-10 sm:grid-cols-2 gap-12 lg:gap-14 2xl:gap-20 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2">
        {/* {products.map((pItem) => (
          <ProductItem key={pItem.slug} itemData={pItem} />
        ))} */}
      </div>
    </div>
  );
};

export default ProductGrid;

export async function getServerSideProps() {
  await db.connect()

  const products = await Product.find().lean()

  return {
    props: { products: products.map(db.convertToObj) },
  }
}

