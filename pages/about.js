import Link from "next/link";
import Image from "next/image";

import aboutUs from '../assets/images/about-us.png';
import mission from '../assets/images/mission.png';
import vision from '../assets/images/vision.png';
import land from '../assets/images/Landscape-2.png';
import mobLand from '../assets/images/Mobile Landscape 2.png';


export default function About() {
    return (
        <>
            
    <section className="about-us">
      <div className="container grid">
        <div className="about-us-text">
          <h1>About Us:</h1>
          <p>
            Collectixt is dedicated to developing the most user-friendly
            platform with the best user experience possible. Ambitchous Token is
            a next-generation decentralized NFT for all market sectors dedicated
            to the growing world of digital artists, designers, and collectors.
          </p>
        </div>
        <div className="about-us-img">
          <Image src={aboutUs} alt="about us" />
        </div>
      </div>
    </section>
    

   
    <section className="mission">
      <div className="container grid">
        <div className="mission-img">
          <Image src={mission} alt="our mission" />
        </div>
        <div className="mission-text">
          <h1>Our Mission</h1>
          <p>
            To create a scalable, cross-chain token network that makes
            generating, utilizing, and trading NFTs much more accessible,
            inexpensive, and quicker, resulting in a considerable increase in
            trade volume and adoption. Enjoy exclusive rights to NFTs you make
            without fear of anyone stealing your idea! Our ecosystem encourages
            people to have fun and be creative during the new wave of NFTs.
          </p>
        </div>
      </div>
    </section>
    
    <section className="vision">
      <div className="container grid">
        <div className="vision-text">
          <h1>Our Vision</h1>
          <p>
            Collectixt wants to create an atmosphere where people can be
            original and creative in the crypto realm by safeguarding and
            establishing unique platforms and an NFT marketplace where people
            can sell, purchase, and auction off their unique NFTs.
          </p>
        </div>
        <div className="vision-img">
        <Image src={vision} alt="our vision" />
        </div>
      </div>
    </section>
    
    <div className="landscape-2">
      <div className="desktop">
      <Image src={land} alt="landscape" />
        <div className="button">
          <a href="how-to-buy.html" className="btn">Buy Presale</a>
        </div>
      </div>
      <div className="mobile">
      <Image src={mobLand} alt="" />
        <div className="button">
            <a href="how-to-buy.html" className="btn">Buy Presale</a>
        </div>
      </div>
    </div>
   

        </>
    )
}