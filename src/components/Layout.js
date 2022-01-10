import Head from "next/head";
import { Fragment } from "react";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <title>Frontend Mentor | E-commerce product page</title>
      </Head>
      <div className="main-content">
        <header className="header">
          Sneakers
          <span>Collections</span>
          <span>Men</span>
          <span>Women</span>
          <span>About</span>
          <span>Contact</span>
        </header>
        <main className="main">{children}</main>

        <footer className="footer"></footer>
      </div>
    </Fragment>
  );
};

export default Layout;
