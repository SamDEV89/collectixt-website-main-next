import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const API_URL = "https://api.collectixt.com/api/v1";

class MyDocment extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content=" Collectixt is dedicated to developing the most user-friendly platform with the best user experience possible. Learn more about Collectixt NFT token now."
          />
          <meta
            name="og:title"
            content="Collectixt &#8211;  Join a broad spectrum of users to easily find, purchase and trade amazing and unique NFTs"
          />
          <meta
            property="og:description"
            content=" Join a broad spectrum of users to easily find, purchase and trade amazing and unique NFTs"
          />

          <link rel="icon" href="/favicon.png" />

          <link
            rel="icon"
            type="image/x-icon"
            href="img/favicon.png"
            alt="Collectixt"
          />
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=UA-234197699-4"
            strategy="lazyOnload"
          />
          <Script
            src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
            strategy="lazyOnload"
          />
          <Script
            src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
            strategy="afterInteractive"
          />
          <Script
            src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"
            strategy="lazyOnload"
          />
          <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
      
            gtag('config', 'UA-234197699-4');
          `,
            }}
          />
          <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                    includedLanguages: 'tr,de,fr,es,en,it',
                    layout: google.translate.TranslateElement.InlineLayout.VERTICAL
                }, 'google_translate_element');
            }
          `,
            }}
          />
          <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              const navLinks = document.querySelector(".nav-links");
              const burger = document.querySelector(".burger");
              const navbar = document.querySelector("nav");
              window.onscroll = () => {
                if (window.scrollY > 20) {
                  navbar.classList.add("scrolled");
                } else {
                  navbar.classList.remove("scrolled");
                }
              };
        
              burger.addEventListener("click", () => {
                navLinks.classList.toggle("active");
                burger.classList.toggle("toggled");
              });
          `,
            }}
          />
          <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              // select all accordion items
            const accItems = document.querySelectorAll(".accordion__item");

            // add a click event for all items
            accItems.forEach((acc) => acc.addEventListener("click", toggleAcc));

            function toggleAcc() {
              // remove active class from all items exept the current item (this)
              accItems.forEach((item) =>
                item != this ? item.classList.remove("accordion__item--active") : null
              );

              // toggle active class on current item
              if (this.classList != "accordion__item--active") {
                this.classList.toggle("accordion__item--active");
              }
            }
          `,
            }}
          />
          <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              const closeBtn = document.getElementById("closeBtn")
              const closeBtn1 = document.getElementById("closeBtn1")
              const closeBtn2 = document.getElementById("closeBtn2")
              const modalOpener = document.getElementById("modalOpen")
              const modalOpener1 = document.getElementById("modalOpen1")
              const modalOpener2 = document.getElementById("modalOpen2")

              closeBtn?.addEventListener("click", () => {
                document.getElementById("modal").style.display = "none"
                document.getElementById("ETH-modal").style.display = "none"
              })

              modalOpener?.addEventListener("click", () => {
                document.getElementById("modal").style.display = "flex"
                document.getElementById("ETH-modal").style.display = "flex"
              })

              closeBtn1?.addEventListener("click", ()=>{
                document.getElementById("USDT-modal").style.display = "none"
              })

              modalOpener1?.addEventListener("click",()=>{
                document.getElementById("USDT-modal").style.display = "flex"
              })


              closeBtn2?.addEventListener("click", ()=>{
                document.getElementById("CARD-modal").style.display = "none"
              })

              modalOpener2?.addEventListener("click",()=>{
                document.getElementById("CARD-modal").style.display = "flex"
              })
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocment;
