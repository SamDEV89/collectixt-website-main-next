import Link from "next/link";
import Image from "next/image";
import WalletModal from "../components/modals/WalletModal";

import landscape2 from "../assets/images/Landscape-2.png";
import moblandscape2 from "../assets/images/Mobile Landscape 2.png";
import coin from "../assets/images/coins-buy.svg";
import card from "../assets/images/pay-card.png";
import eth from "../assets/images/ethereum-eth-logo.png";
import usdt from "../assets/images/tether-usdt-logo.png";
import mis from "../assets/images/mission.png";
import land1 from "../assets/images/Landscape-2.png";
import mobLand from "../assets/images/Mobile Landscape 2.png";
import footBus from "../assets/images/footer-businesses.png";
import mobfootBus from "../assets/images/Frame 29.png";

export default function Roadmap() {
  return (
    <>
      <section className="get-in-early">
        <h1 className="middle">Get In Early</h1>
        <div className="container grid">
          <div className="get-in-early-text">
            <p>
              It couldn't be easier to get your hands on the token in our
              pre-sale. You can buy Collectixt directly using your card, or can
              use USDT or ETH already in your wallet. After the public presale
              ends, you'll be able to claim your purchased Collectixt Tokens
              using the claim page.
            </p>
            <div className="btns">
              <WalletModal />
            </div>
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

      <div className="landscape-buy">
        <div className="desktop">
          <Image src={landscape2} alt="landscape" />
        </div>
        <div className="mobile">
          <Image src={moblandscape2} alt="" />
        </div>
      </div>

      <section className="about-us dark-buy">
        <h1 className="middle">How To Buy Collectixt</h1>
        <div className="container grid">
          <div className="about-us-text">
            <h1>Step 1</h1>
            <p className="spaceDown">
              You can begin the purchase of CLEX in one of these ways:
            </p>
            <p className="spaceDown">For PC</p>
            <p className="spaceDown">
              To purchase CLEX on your desktop browser, ensure you have the
              Metamask wallet extension installed on your web browser. Metamask
              allows for seamless purchasing experience on your PC.
            </p>
            <p className="spaceDown">For Mobile</p>
            <p className="spaceDown">
              Ensure using a crypto wallet that supports Wallet Connect. Trust
              Wallet is recommended.
            </p>
            <p>
              You can simply connect the Collectixt website with the Trust
              Wallet in-built browser or copy buy.collectixt.com and paste it in
              the in-built Trust Wallet.
            </p>
          </div>
          <div className="about-us-img">
            <Image src={coin} alt="about us" />
          </div>
        </div>
      </section>

      <section className="mission dark-buy">
        <h1 className="middle">Step 2:</h1>
        <p className="step2-txt">
          Once you have selected your preferred wallet, tap "Connect Wallet" and
          choose the suitable option to proceed with your purchase. Mobile users
          will need to select "Wallet Connect".. <br />
          <br />
          After connecting your wallet, you'll have three options for the
          purchase of collectixt:
        </p>
        <div className="container grid grid-spa">
          <div className="mission-text back-cover">
            <div className="option-icon">
              <Image src={card} alt="card" />
            </div>
            <h1>Buy With Card</h1>
            <p>
              The "Buy with Card" option will allow you to seamlessly purchase
              ETH or USDT that will be sent instantly to your wallet, through
              our partner, Transak. To begin your CLEX purchase with card, start
              by clicking the "BUY with Card" option and follow the subsequent
              instructions. To meet the required minimum CLEX purchase, it is
              advisable to buy at least $15 worth of ETH or USDT.
            </p>
          </div>
          <div className="mission-text back-cover">
            <div className="option-icon">
              <Image src={eth} alt="card" />
            </div>
            <h1>Buy with ETH</h1>
            <p>
              When you have enough ETH in your wallet, you can exchange it for
              CLEX (if you don't have any ETH or USDT, please choose option 1 to
              buy some). Click "Convert ETH" after entering the desired CLEX
              purchase amount (a minimum of 1,000 must be entered). You will be
              prompted to confirm the transaction by your wallet provider, who
              will also display the price of gas.
            </p>
          </div>
          <div className="mission-text back-cover">
            <div className="option-icon">
              <Image src={usdt} alt="card" />
            </div>
            <h1>Buy with USDT</h1>
            <p>
              Please check your wallet to make sure you have at least $15 in
              USDT before initiating the CLEX purchasing process. Enter the
              number of CLEX tokens you want to buy (1,000 minimum). Click "USDT
              to Convert." The purchase will then require TWO of your approvals.
              The USDT contract receives first approval, followed by the
              transaction amount. To complete the transaction, please make sure
              you go through both approval processes.
            </p>
          </div>
        </div>
      </section>

      <section className="vision dark-buy">
        <div className="container grid">
          <div className="vision-text">
            <h1>Step 3:</h1>
            <p>
              You will be able to get your Collectixt tokens (CLEX) after the
              presale is over. To get your purchases CLEX tokens, yo u must go
              to the main website and click on the "Collect" button. More
              information will be provided in due time.
            </p>
          </div>
          <div className="vision-img">
            <Image src={mis} alt="our vision" />
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
          <Image src={land1} alt="landscape" />
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
