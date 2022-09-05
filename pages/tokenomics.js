import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

import gov from "../assets/images/token-utility/Vector.png";
import mem from "../assets/images/token-utility/Vector-1.png";
import fees from "../assets/images/token-utility/Vector-2.png";
import rewards from "../assets/images/token-utility/Vector-3.png";
import land from "../assets/images/tokenomics-landscape.png";
import mobland from "../assets/images/Mobile Landscape 2.png";
import pie from "../assets/images/pie-chart.png";
import coin from "../assets/images/token-details/Rectangle 519.png";
import circle from "../assets/images/Information-circle.png";
import land1 from "../assets/images/Landscape-2.png";
import mobLand from "../assets/images/Mobile Landscape 2.png";
import footBus from "../assets/images/footer-businesses.png";
import mobfootBus from "../assets/images/Frame 29.png";

const API_URL = "https://api.collectixt.com/api/v1";

export default function Tokennomics() {
  useEffect(() => {
    const url = `${API_URL}/stages`;
    axios
      .get(url)
      .then(({ data }) => {
        let stages = data;
        let start_date = new Date(stages.data[0].start_date).getTime();
        let text = "";
        const today = new Date();

        $(".js-p-date").text(
          moment(stages.data[0].start_date).format("DD/MM/YYYY")
        );
        $(".js-s-price").text(stages.data[0].token_price.toFixed(2));
        $(".js-l-date").text(
          moment(stages.data[stages.data.length - 1].end_date).format(
            "DD/MM/YYYY"
          )
        );

        $(".js-p1-start").text(
          moment(stages.data[0].start_date).format("DD/MM/YYYY") +
            " - " +
            moment(stages.data[0].end_date).format("DD/MM/YYYY")
        );
        $(".js-p1-tokens").text(stages.data[0].total_tokens);

        $(".js-p2-start").text(
          moment(stages.data[1].start_date).format("DD/MM/YYYY") +
            " - " +
            moment(stages.data[1].end_date).format("DD/MM/YYYY")
        );
        $(".js-p2-tokens").text(stages.data[1].total_tokens);

        $(".js-p3-start").text(
          moment(stages.data[2].start_date).format("DD/MM/YYYY") +
            " - " +
            moment(stages.data[2].end_date).format("DD/MM/YYYY")
        );
        $(".js-p3-tokens").text(stages.data[2].total_tokens);

        if (today < new Date(stages.data[0].start_date)) {
          start_date = new Date(stages.data[0].start_date);
          text = "PRESALE WILL START IN";
        }
        if (
          today > new Date(stages.data[0].start_date) &&
          today < new Date(stages.data[0].end_date)
        ) {
          start_date = new Date(stages.data[0].end_date);
          text = "PRESALE STAGE 1 WILL ENDED IN";
        }

        if (
          today > new Date(stages.data[1].start_date) &&
          today < new Date(stages.data[1].end_date)
        ) {
          start_date = new Date(stages.data[1].end_date);
          text = "PRESALE STAGE 2 WILL ENDED IN";
        }

        if (
          today > new Date(stages.data[2].start_date) &&
          today < new Date(stages.data[2].end_date)
        ) {
          start_date = new Date(stages.data[2].end_date);
          text = "PRESALE STAGE 3 WILL ENDED IN";
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <section className="token-utility">
        <h1 className="font-extrabold text-[24px]">Token Utility</h1>
        <div className="container grid">
          <div className="cards">
            <div className="card card-1">
              <Image src={gov} alt="Governance" />
              <h2>Governance</h2>
              <p>
                The Collectixt Token is used to vote in governance policy
                referendums. Holders of Ambitchous Tokens can vote with their
                tokens in the Ambitchous ecosystem policy-making process.
              </p>
            </div>
            <div className="card card-2">
              <Image src={mem} alt="membership" />
              <h2>Membership</h2>
              <p>
                In addition to participating in governance, Collectixt token
                holders will have access to certain rights and protections
                inside the ecosystem that non-holders would not.
              </p>
            </div>
            <div className="card card-3">
              <Image src={fees} alt="network fees" />
              <h2>Network Fees</h2>
              <p>
                Collectixt Token is the main digital currency used to pay
                transaction fees and make trades on the native NFT Marketplace.
              </p>
            </div>
            <div className="card card-4">
              <Image src={rewards} alt="Rewards" />
              <h2>Rewards</h2>
              <p>
                Collectixt Token would be used to distribute and give rewards to
                all users.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="tokenomics-landscape">
        <div className="desktop">
          <Image src={land} alt="landscape" />
        </div>
        <div className="mobile">
          <Image src={mobland} alt="" />
        </div>
      </div>

      <section className="tokenomics-details">
        <div className="container flex">
          <h1 className="title">The total supply of the Collectixt Token is</h1>
          <p>5,000,000</p>
          <Image src={pie} alt="Chart" />

          <div className="token-details">
            <h1>Token Details</h1>
            <div className="token">
              <Image src={coin} alt="Coin" className="coin" />
              <div id="table-1">
                <div className="left">Total Supply</div>
                <div className="right">5,000,000 Tokens</div>

                <div className="left">Ticker</div>
                <div className="right j-symbol">CLEX</div>

                <div className="left">Presale</div>
                <div className="right js-p-date">TBA</div>

                <div className="left">Launch Date</div>
                <div className="right js-l-date">TBA</div>

                <div className="left">Start Price</div>
                <div className="right js-s-price">TBA</div>
              </div>
            </div>
          </div>

          <div className="presale-stages">
            <h1 className="font-bold text-[24px]">Presale Stages</h1>
            <div id="table-2">
              <div className="head">Stages</div>
              <div className="head">Date</div>
              <div className="head">Number of Tokens</div>
              <div className="head">Allocations</div>
              <div className="head">Weeks</div>

              <div className="left">Stage 1</div>
              <div className="body js-p1-start"></div>
              <div className="body js-p1-tokens"></div>
              <div className="body">18%</div>
              <div className="body">6.7</div>

              <div className="left">Stage 2</div>
              <div className="body js-p2-start"></div>
              <div className="body js-p2-tokens"></div>
              <div className="body">7.5%</div>
              <div className="body">6.3</div>

              <div className="left">Stage 3</div>
              <div className="body js-p3-start"></div>
              <div className="body js-p3-tokens"></div>
              <div className="body">4.5%</div>
              <div className="body">7</div>
            </div>
            <div className="alert">
              <Image
                src={circle}
                alt=""
                className="w-full h-full flex-shrink-0"
              />
              <h5 className="flex-grow-0 font-medium">
                35% bonus after you register and complete your first deposit!
              </h5>
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
