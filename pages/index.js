import Layout from "../components/Layout";
import Product from "../components/Product";
import productItem from "../data/products.json";

function Home() {
  return (
    <Layout title="Home page">
      <h1 className="text-2xl font-semibold mb-6">Products</h1>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4">
        {productItem.map((pItem) => (
          <Product key={pItem.slug} item={pItem} />
        ))}
      </div>
    </Layout>
  );
}

export default Home;
