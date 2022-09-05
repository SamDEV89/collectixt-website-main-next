import Link from "next/link";
import Image from "next/image";

import BnbModal from "../components/modals/BnBModal";
import CardModal from "../components/modals/CardModal";
import EthModal from "../components/modals/EthModal";
import UsdtModal from "../components/modals/UsdtModal";

import lannd from "../assets/images/Landscape-2.png";
import moblannd from "../assets/images/Mobile Landscape 2.png";

export default function AfterConnect() {
  return (
    <>
      <section className="get-in-early">
        <h1 className="middle">Get In Early</h1>
        <div className="container grid">
          <div className="get-in-early-text">
            <p>
              It couldn&apost be easier to get your hands on the token in our
              pre-sale. You can buy Collectixt directly using your card, or can
              use USDT or ETH already in your wallet. After the public presale
              ends, you&aposll be able to claim your purchased Collectixt Tokens
              using the claim page.
            </p>
          </div>
          <div className="get-in-early-progress-container">
            <div className="get-in-early-progress">
              <p className="token-ramaining">
                34,564,520 Collectixt Tokens Remaining
              </p>
              <p className="until">UNTIL 1 USDT = 50.20 CLEX</p>
              <p className="raised">USDT Raised: $4,324,247.25/4,750,000</p>
              <div className="fill-cont">
                <div className="fill-hold">
                  <div className="fill"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="modal3">
        <div className="relative">
          <div className="md:block hidden absolute left-0 bottom-0">
            <Image src={lannd} alt="landscape" />
          </div>

          <div className=" arrange mb-5 relative">
            <EthModal />
            <CardModal />
            <UsdtModal />
          </div>
        </div>
      </section>
    </>
  );
}
