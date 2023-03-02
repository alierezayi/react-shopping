import Head from "next/head";
import { useSelector } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import Cookies from "js-cookie";

const Layout = ({ children, title }) => {
  const state = useSelector((state) => state.cart);
  console.log(state);
  console.log(Cookies.get("cart"));

  return (
    <>
      <Head>
        <title>{`${title} - Shopping`}</title>
      </Head>

      <div className="flex min-h-screen flex-col justify-between ">
        <Header />
        <main className="container mt-10 m-auto px-1">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
