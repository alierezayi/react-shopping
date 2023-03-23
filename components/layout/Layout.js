import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{`${title} - Shopping`}</title>
      </Head>
      <div className="flex min-h-screen flex-col justify-between ">
        <Header />
        <main className="">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
