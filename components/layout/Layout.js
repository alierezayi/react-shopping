import Head from "next/head";
import { useSelector } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, title }) => {
  const state = useSelector((state) => state.cart);

  return (
    <>
      <Head>
        <title>{`${title} - Shopping`}</title>
      </Head>

      <div className="flex min-h-screen flex-col justify-between ">
        <Header />
        <main className="container mt-16 m-auto">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
