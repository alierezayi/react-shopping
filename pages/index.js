import Layout from "../components/layout/Layout";
import ProductList from "../components/products/ProductList";

function Home() {
  return (
    <Layout title="Home page">
      <ProductList />
    </Layout>
  );
}

export default Home;
