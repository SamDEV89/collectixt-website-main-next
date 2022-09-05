import { useState } from "react";
import Modal from "./Modal";

const EthModal = () => {
  const [show, setShow] = useState(false);
  const close = () => setShow(false);
  const callModal = () => setShow(true);
  return (
    <div className="home">
      <button onClick={callModal} className="btn-how">
        Buy CLEX With ETH
      </button>
      {show && (
        <Modal close={close}>
          <div className="container mx-auto">
            <div className="black-box">
              <h2 className="md:mb-6 mb-8 text-gradient text-3xl">
                Buy CLEX With ETH
              </h2>
              <form>
                <div className="input-container mb-8">
                  <input
                    className="input-field "
                    type="number"
                    placeholder="0"
                  />
                  <span className="right-txt">CLEX</span>
                </div>
                <div className="input-container ">
                  <input
                    className="input-field "
                    type="number"
                    placeholder="0"
                  />
                  <span className="right-txt">ETH</span>
                </div>
                <button className="btn-how">
                  Buy CLEX With ETH
                </button>
              </form>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default EthModal;
