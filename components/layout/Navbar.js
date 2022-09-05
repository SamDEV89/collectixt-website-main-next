import Link from "next/link";
import Image from "next/image";

import Logo from "../../assets/images/Logo.png";

const makeNavLinksInActive = () => {
  document.querySelector(".nav-links.active")?.classList.remove("active");
};

const NavBar = () => {
  return (
    <header1>
      <nav>
        <div className="nav-logo">
          <Link href="/">
            <div onClick={makeNavLinksInActive} style={{ cursor: "pointer" }}>
              <Image src={Logo} alt="Collectixt" />
            </div>
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link href="/about">
              <div onClick={makeNavLinksInActive} style={{ cursor: "pointer" }}>
                About
              </div>
            </Link>
          </li>
          <li>
            <Link href="/marketplace">
              <div onClick={makeNavLinksInActive} style={{ cursor: "pointer" }}>
                NFT Marketplace
              </div>
            </Link>
          </li>
          <li>
            <Link href="/tokenomics">
              <div onClick={makeNavLinksInActive} style={{ cursor: "pointer" }}>
                Tokenomics
              </div>
            </Link>
          </li>
          <li>
            <Link href="/roadmap">
              <div onClick={makeNavLinksInActive} style={{ cursor: "pointer" }}>
                Roadmap
              </div>
            </Link>
          </li>
          <li>
            <a href="/collectixt.pdf">Whitepaper</a>
          </li>
          <li>
            <Link href="/how-to-buy">
              <div onClick={makeNavLinksInActive} style={{ cursor: "pointer" }}>
                How to buy
              </div>
            </Link>
          </li>
          <li>
            <Link href="/faq">
              <div onClick={makeNavLinksInActive} style={{ cursor: "pointer" }}>
                FAQ
              </div>
            </Link>
          </li>
        </ul>

        <div className="burger">
          <div className="line-1 line"></div>
          <div className="line-2 line"></div>
          <div className="line-3 line"></div>
        </div>
      </nav>
    </header1>
  );
};

export default NavBar;
