import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import FootImg from "../../assets/images/footer-logo.png";
import Telegram from "../../assets/images/socials/Vector.png";
import Twitter from "../../assets/images/socials/Vector-2.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container grid">
        <div className="row-1">
          <div className="logo">
            <Link href="index.html">
              <Image src={FootImg} alt="Collectixt" />
            </Link>
          </div>
          <div className="language">
            <h1>Language</h1>
            <div id="google_translate_element"></div>
          </div>
          <div className="links">
            <h1>Links</h1>
            <ul className="footer-links">
              <div className="link-1">
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/tokenomics">Tokenomics</Link>
                </li>
                <li>
                  <Link href="roadmap.html">Roadmap</Link>
                </li>
                <Link href="#">
                  <li>Audit</li>
                </Link>
              </div>
              <div className="link-2">
                <li>
                  <a href="/collectixt.pdf">Whitepaper</a>
                </li>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
                <Link href="http://signup.collectixt.com/">
                  <li>Enter Presale</li>
                </Link>
              </div>
            </ul>
          </div>
        </div>

        <div className="row-2">
          <hr />
          <div className="row-2-container">
            <div className="copyright">
              <h4>
                Copyright © 2022 Collectixt NFT Marketplace. All rights reserved
              </h4>
            </div>
            <div className="socials">
              <h3>Connect with Us</h3>
              <div className="imgs">
                <Link
                  href="https://t.me/CollectixtTokenOfficial"
                  className="telegram-btn"
                >
                  <Image src={Telegram} alt="Telegram" />
                </Link>
                <Link
                  href="https://twitter.com/CollectixtToken"
                  className="twitter-btn"
                >
                  <Image src={Twitter} alt="Twitter" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
