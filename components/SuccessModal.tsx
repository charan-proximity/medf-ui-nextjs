import React from "react";
import { Modal } from "flowbite-react";
interface ISuccessModalProps {
  toggleSuccessModal: boolean;
  onClickOk: () => void;
}
function SuccessModal({ toggleSuccessModal, onClickOk }: ISuccessModalProps) {
  return (
    <Modal show={toggleSuccessModal} size="sm">
      <Modal.Body>
        <div className="mt-10 ">
          <div className="border-b-0 relative ">
            <div className=" absolute left-24    w-24 h-24 rounded-full bg-primary-green  p-4 text-center  shadow-md -mt-28 ">
              <span>
                <svg
                  className="mr-1 mt-2  "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 56.7 57"
                  enableBackground="new 0 0 56.7 57"
                >
                  <polyline
                    fill="none"
                    stroke="#f1f1f1"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    points="
20.3,25.4 28.6,33.9 46.7,8.3 "
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center space-y-3 ">
            <h4 className="text-2xl font-semibold text-gray-500">Awesome!</h4>
            <div className=" text-center ">
              <p className="">Your booking has been confirmed.</p>
              <p>Check your email for details.</p>
            </div>
          </div>
          <div className=" border bg-primary-green px-4 py-1 my-4 text-lg  text-white  text-center rounded-md ">
            <button onClick={onClickOk} data-dismiss="modal">
              OK
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default SuccessModal;
