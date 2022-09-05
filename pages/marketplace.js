import Link from "next/link";
import Image from "next/image";

import market from "../assets/images/collectixt-img.png";

import land from "../assets/images/Landscape-2.png";
import mobLand from "../assets/images/Mobile Landscape 2.png";
import footBus from "../assets/images/footer-businesses.png";
import mobfootBus from "../assets/images/Frame 29.png";

export default function About() {
  return (
    <>
      <section className="collectixt">
        <div className="header">
          <h1>Collectixt NFT Marketplace VS. Collectixt Token</h1>
          <div className="collectixt-img flex items-center justify-center">
            <Image src={market} alt="collectixt" />
          </div>
        </div>
        <div className="container">
          <div className="description">
            <p>
              They share a name because the Collectixt token is the native token
              of the Collectixt NFT Marketplace and finds its main utility
              there. The token was intended to give market participants a faster
              and less expensive way to create and transfer NFTs.
            </p>

            <p>
              By listing on the Ethereum and Polygon blockchain, Collectixt
              inherits a proven and robust ecosystem that happens to be the
              largest NFTs blockchain network. The experts are working earnestly
              to ensure that many NFTs are minted without it slowing the
              transaction process. We leverage the blockchain networks because
              they ensure that transaction history and token metadata are openly
              authenticated. i.e., once a transaction is concluded, it is
              impossible to manipulate ownership.
            </p>

            <p>
              The Collectixt experts ensure that the NFT artists pays less fee
              (more than 70% reduction in the value charged by other platforms)
              in the process of auctioning their NFTs on the Collectixt
              platform. We will ensure that all NFT transactions are carried out
              successfully and turns into a win-win situation for both the
              seller and buyer.
            </p>
          </div>
        </div>
      </section>

      <section className="enter-presale">
        <div className="container">
          <h1>
            Become a part of the next-gen ecosystem that promotes generation,
            utilization and security of NFTs
          </h1>
          <a href="/how-to-buy">
            <button className="btn">Buy Presale</button>
          </a>
        </div>
      </section>

      <div className="landscape-2">
        <div className="desktop">
          <Image src={land} alt="landscape" />
          <div className="container">
            <Image src={footBus} alt="business" />
          </div>
        </div>
        <div className="mobile">
          <Image src={mobLand} alt="" />
          <div className="container">
            <Image src={mobfootBus} alt="business" />
          </div>
        </div>
      </div>
    </>
  );
}
