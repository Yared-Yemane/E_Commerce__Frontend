import React from "react";
import { IoMdClose, IoMdCloseCircleOutline } from "react-icons/io";
import Button from "../Shared/Button";

const Popup = ({ orderPopup, handleOrderPopup }) => {
  console.log(orderPopup);
  return (
    <>
      {orderPopup && (
        <div>
          <div
            className=" w-screen h-screen fixed top-0 left-0 
      bg-black/50 backdrop-blur-sm z-20"
          >
            <div
              className=" w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 
        -translate-y-1/2 p-4 shadow-md bg-white 
        dark:bg-gray-900 dark:text-white duration-200 rounded-xl"
            >
              {/* Header section */}
              <div className=" flex justify-between items-center">
                <h1>Order Now</h1>
                <div>
                  <IoMdClose
                    className=" text-2xl cursor-pointer"
                    onClick={handleOrderPopup}
                  />
                </div>
              </div>
              {/* Form section */}
              <div className=" mt-4">
                <input type="text" placeholder="Name" className="form-input" />
                <input
                  type="email"
                  placeholder="Email"
                  className="form-input"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="form-input"
                />
                <div className=" flex justify-center">
                  <Button
                    text={"Order Mow"}
                    bgColor={"bg-primary"}
                    textColor={"text-white"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
