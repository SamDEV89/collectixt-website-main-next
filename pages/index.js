import Head from "next/head";

import Link from "next/link";
import Image from "next/image";

import Frame6 from "../assets/images/Collectixt/Frame 6.png";
import mobFrame6 from "../assets/images/mobile-features/Frame 6.png";
import mobFrame7 from "../assets/images/mobile-features/Frame 7.png";
import mobFrame8 from "../assets/images/mobile-features/Fram-8.png";
import rect513 from "../assets/images/offers-img/Rectangle 513.png";
import rect513_1 from "../assets/images/offers-img/Rectangle 513-1.png";
import rect513_2 from "../assets/images/offers-img/Rectangle 513-2.png";
import rect513_3 from "../assets/images/offers-img/Rectangle 513-3.png";
import rect513_4 from "../assets/images/offers-img/Rectangle 513-4.png";
import rect513_5 from "../assets/images/offers-img/Rectangle 513-5.png";
import landscape1 from "../assets/images/Landscape-1.png";
import moblandscape1 from "../assets/images/Mobile Landscape 1.png";
import frame61 from "../assets/images/business-logo/desktop/Collectixt/Frame 61.png";
import frame343 from "../assets/images/business-logo/desktop/Collectixt/Frame 343.png";
import frame59 from "../assets/images/business-logo/desktop/Collectixt/Frame 59.png";
import frame58 from "../assets/images/business-logo/desktop/Collectixt/Frame 58.png";
import frame60 from "../assets/images/business-logo/desktop/Collectixt/Frame 60.png";
import frame62 from "../assets/images/business-logo/mobile/Collectixt/Frame 62.png";
import landscape2 from "../assets/images/Landscape-2.png";
import footBus from "../assets/images/footer-businesses.png";
import moblandscape2 from "../assets/images/Mobile Landscape 2.png";
import mobfootBus from "../assets/images/Frame 29.png";

export default function Home() {
  return (
    <>
      <header>
        <div className="hero">
          <div className="container">
            <div className="hero-text">
              <h1>
                Join a broad spectrum of users to easily find, purchase and
                trade amazing and unique NFTs
              </h1>
              <div className="btns">
                <button className="btn">
                  <Link href="/how-to-buy">Buy Presale</Link>
                </button>
                <button className="btn">
                  <Link href="http://signup.collectixt.com/login">
                    <div>
                      <span className="ico mb-[-10px]"></span>
                      <span>Collect</span>
                    </div>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="features">
        <div className="container">
          <h1>We are featured on</h1>
          <div className="businesses grid">
            <div className="desktop">
              <Image src={Frame6} alt="coinbase" />
            </div>
            <div className="mobile">
              <Image className="mobile-1" src={mobFrame7} alt="" />
              <Image className="mobile-2" src={mobFrame6} alt="" />
              <Image className="mobile-3" src={mobFrame8} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="offers-section">
        <div className="container">
          <h1>What we are offering</h1>
          <div className="offers">
            <div className="offer offer-1">
              <Image src={rect513} alt="Easy to navigate ecosystem" />
              <p>Easy to navigate ecosystem</p>
            </div>
            <div className="offer offer-2">
              <Image
                src={rect513_1}
                alt="Multi-chain functionality in the NFT space"
              />
              <p>Multi-chain functionality in the NFT space</p>
            </div>
            <div className="offer offer-3">
              <Image src={rect513_2} alt="Juicy Rewards" />
              <p>Juicy Rewards</p>
            </div>
            <div className="offer offer-4">
              <Image src={rect513_3} alt="Fast and reliable customer support" />
              <p>Fast and reliable customer support</p>
            </div>
            <div className="offer offer-5">
              <Image
                src={rect513_4}
                alt="Platform to tokenize any item of your choice"
              />
              <p>Platform to tokenize any item of your choice</p>
            </div>
            <div className="offer offer-6">
              <Image src={rect513_5} alt="Secured Ecosystem" />
              <p>Secured Ecosystem</p>
            </div>
          </div>
        </div>
      </section>

      <div className="landscape">
        <div className="desktop">
          <Image src={landscape1} alt="" />
        </div>
        <div className="mobile">
          <Image src={moblandscape1} alt="" />
        </div>
      </div>

      <section className="business-imgs">
        <div className="container">
          <h1>As Seen On</h1>
          <div className="business-img">
            <div className="desktop">
              <Image src={frame61} alt="" />
              <Image src={frame343} alt="" />
              <Image src={frame59} alt="" />
              <Image src={frame58} alt="" />
              <Image src={frame60} alt="" />
            </div>

            <div className="mobile">
              <Image src={frame62} alt="" />
            </div>
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
          <Image src={landscape2} alt="landscape" />
          <div className="container">
            <Image src={footBus} alt="business" />
          </div>
        </div>
        <div className="mobile">
          <Image src={moblandscape2} alt="" />
          <div className="container">
            <Image src={mobfootBus} alt="business" />
          </div>
        </div>
      </div>
    </>
  );
}
