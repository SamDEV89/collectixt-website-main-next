import Link from "next/link";
import Image from "next/image";


import land1 from '../assets/images/Landscape-2.png';
import mobLand from '../assets/images/Mobile Landscape 2.png';
import footBus from '../assets/images/footer-businesses.png';
import mobfootBus from '../assets/images/Frame 29.png';


export default function Roadmap() {
    return (
        <> 


    <section className="intro">
      <div className="container">
        <h1>Roadmap</h1>
        <p>
          Our planned Roadmap, a step-by-step development strategy, is discussed
          below :
        </p>
      </div>
    </section>
   
    <div className="timeline-container">
      <div className="timeline">
        <ul>
          <li>
            <div className="timeline-content">
              <h1>Phase 1: Creation of Website</h1>
              <p>
                The first stage will concentrate on developing and releasing the
                Ambitchous ecosystem's official website. The website will act as
                an ecosystem and marketplace, allowing users and token holders
                to acquire native tokens, exchange unique tokens, and engage in
                the ecosystem, among other things.
              </p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h1>Phase II: Release of Whitepaper</h1>
              <p>
                The focus of the next stage will be on releasing and publicizing
                project documentation. This document provides all of the
                pertinent information regarding the project.
              </p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h1>Phase III: Private Sale</h1>
              <p>
                At this stage, the token is open for sale to select investors
                and interested parties.
              </p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h1>Phase IV: Public Sale</h1>
              <p>
                The Ambitchous token would be available for purchase by the
                general public.
              </p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h1>Phase V: Marketing</h1>
              <p>
                To raise awareness of the environment, intensive marketing will
                be carried out. We'll use a variety of marketing techniques,
                including airdrops, social media marketing.
              </p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h1>Phase IV: Launch of Play to Earn</h1>
            </div>
          </li>
        </ul>
      </div>
    </div>
 
    <section className="mailing">
      <div className="container flex">
        <h1>Join our mailing list</h1>
        <p>
          Don’t get left out on all the important information and update
          notifications, subscribe to our newsletter today
        </p>
        <form>
          <input
            type="text"
            placeholder="Enter Valid Email Address"
            className="input"
          />
          <button type="submit" className="btn">Subscribe</button>
        </form>
      </div>
    </section>

    <section className="enter-presale">
      <div className="container">
        <h1>
          Become a part of the next-gen ecosystem that promotes generation,
          utilization and security of NFTs
        </h1>
        <a href="how-to-buy.html">
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
    )
}