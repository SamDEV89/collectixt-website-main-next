import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Modal from "./Modal";
import Meta from "../../assets/images/Mask_fox.svg";
import Wallet from "../../assets/images/wallet-connect.svg";

const WalletModal = () => {
  const [show, setShow] = useState(false);
  const close = () => setShow(false);
  const callModal = () => setShow(true);
  return (
    <div className="home">
      <button onClick={callModal} className="btn-how">
        Connect Wallet
      </button>
      {show && (
        <Modal close={close}>
          <div className="container mx-auto">
            <div className="black-box">
              <h2 className="md:mb-6 mb-8 text-gradient text-3xl">
                Select Provider
              </h2>
              <div className=" img-container">
                <div>
                  <Link href="/afterconnect">
                    <Image src={Meta} alt="logo" className="img-modal" />
                  </Link>
                  <p className="text-white">MetaMask</p>
                </div>
                <div>
                  <Link href="/afterconnect">
                    <Image src={Wallet} alt="logo" className="img-modal" />
                  </Link>
                  <p className="text-white">Wallet Connect</p>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default WalletModal;
