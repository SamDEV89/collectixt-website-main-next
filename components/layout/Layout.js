import Footer from "./Footer";
import NavBar from "./Navbar";
import Script from "next/script";
import React, { useContext, useEffect } from "react";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Collectixt NFT Token</title>
      </Head>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
