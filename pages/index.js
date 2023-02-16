import Layout from "../components/Layout";
import Product from "../components/Product";
import productItem from "../data/products.json";

function Home() {
  return (
    <Layout title="Home page">
      <div className="rounded-2xl border-2 border-slate-200 border-dashed py-14 px-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-5">
          {productItem.map((pItem) => (
            <Product key={pItem.slug} item={pItem} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Home;
