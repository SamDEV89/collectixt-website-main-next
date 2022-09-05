import '../styles/globals.css';
import '../styles/about.css';
import '../styles/after-connect.css';
import '../styles/extrastyle.css';
import '../styles/faq.css';
import '../styles/home.css';
import '../styles/how-to-buy.css';
import '../styles/marketplace.css';
import '../styles/roadmap.css';
import '../styles/tokenomic.css';
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
