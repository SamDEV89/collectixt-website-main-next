const Faq = () => {
  return (
    <div className="accordion">
      <div className="accordion__item">
        <button className="accordion__btn">
          <span className="accordion__caption">What are NFTs?</span>
          <span className="accordion__icon">&gt;</span>
        </button>

        <div className="accordion__content">
          <p>
            Non-fungible tokens (NFTs) are blockchain-based cryptographic assets
            having unique identifying codes and information that separate them
            from one another.
          </p>
        </div>
      </div>

      <div className="accordion__item">
        <button className="accordion__btn">
          <span className="accordion__caption">
            What is the Collectixt platform?
          </span>
          <span className="accordion__icon">&gt;</span>
        </button>

        <div className="accordion__content">
          <p>
            Collectixt wants to create an atmosphere where people can be
            original and creative in the crypto realm by safeguarding and
            establishing unique platforms and an NFT marketplace where people
            can sell, purchase, and auction off their unique NFTs.
          </p>
        </div>
      </div>

      <div className="accordion__item">
        <button className="accordion__btn">
          <span className="accordion__caption">
            Is Collectixt a Decentralised Autonomous Organisation?
          </span>
          <span className="accordion__icon">&gt;</span>
        </button>

        <div className="accordion__content">
          <p>Yes</p>
        </div>
      </div>

      <div className="accordion__item">
        <button className="accordion__btn">
          <span className="accordion__caption">
            What can the Collectixt be used for?
          </span>
          <span className="accordion__icon">&gt;</span>
        </button>

        <div className="accordion__content">
          <ul>
            <li>
              Governance: The Collectixt Token is used to vote in governance
              policy referendums. Holders of Ambitchous Tokens can vote with
              their tokens in the Ambitchous ecosystem policy-making process.
            </li>

            <li>
              Membership: In addition to participating in governance, Ambitchous
              token holders will have access to certain rights and protections
              inside the ecosystem that non-holders would not.
            </li>
            <li>
              Network Fees: Ambitchous Token is the main digital currency used
              to pay transaction fees and make trades on the native NFT
              Marketplace.
            </li>
            <li>
              Rewards: Ambitchous Token would be used to distribute and give
              rewards to all users.
            </li>
          </ul>
        </div>
      </div>

      <div className="accordion__item">
        <button className="accordion__btn">
          <span className="accordion__caption">
            What are the benefits of Collectixt token?
          </span>
          <span className="accordion__icon">&gt;</span>
        </button>

        <div className="accordion__content">
          <p>
            Highly convertible, highly accessible, and reliably stable, our
            token is going to redefine people's relationship with
            cryptocurrencies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
