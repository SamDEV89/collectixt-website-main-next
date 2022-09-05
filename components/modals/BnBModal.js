import { useState } from "react";
import Modal from "./Modal";

const BnbModal = () => {
  const [show, setShow] = useState(false);
  const close = () => setShow(false);
  const callModal = () => setShow(true);
  return (
    <div className="home">
      <button onClick={callModal} className="btn my-6 rounded-md">
        Buy PRSC With BNB
      </button>
      {show && (
        <Modal close={close}>
          <div className="container mx-auto">
            <div className="black-box">
              <h2 className="md:mb-6 mb-8 text-gradient text-3xl">
                Buy PRSC With BNB
              </h2>
              <form>
                <div className="input-container mb-8">
                  <input
                    className="input-field "
                    type="number"
                    placeholder="0"
                  />
                  <span className="right-txt">PRSC</span>
                </div>
                <div className="input-container ">
                  <input
                    className="input-field "
                    type="number"
                    placeholder="0"
                  />
                  <span className="right-txt">BNB</span>
                </div>
                <button className="btn my-6 rounded-md">
                  Buy PRSC With BNB
                </button>
              </form>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default BnbModal;
