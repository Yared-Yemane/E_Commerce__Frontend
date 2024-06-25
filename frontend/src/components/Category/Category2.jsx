import React from "react";
import Image1 from "../../assets/category/gaming.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/speaker.png";
import Button from "../Shared/Button";

const Category2 = ({ handleOpenPopup }) => {
  return (
    <div className="py-8 pl-4 pr-4">
      <div className=" container">
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first column */}
          <div
            className=" sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400 to-gray-300/10
            text-white rounded-3xl relative h-[320px] flex items-end"
          >
            {/* category text section */}
            <div>
              <div className="mb-4">
                <p className=" mb-[2px] text-white">Enjoy</p>
                <p className=" text-2xl font-semibold mb-[2px]">With</p>
                <p className=" text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Laptop
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={Image1}
              alt="Category image"
              className=" absolute w-[250px] -right-2 lg:top-x"
            />
          </div>
          {/* second column */}
          <div
            className=" py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/90
            text-white rounded-3xl relative h-[320px] flex items-start"
          >
            {/* category text section */}
            <div>
              <div className="mb-4">
                <p className=" mb-[2px] text-white">Enjoy</p>
                <p className=" text-2xl font-semibold mb-[2px]">With</p>
                <p className=" text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Earphone
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandGreen"}
                />
              </div>
            </div>
            <img
              src={Image2}
              alt="Category image"
              className=" absolute w-[320px] bottom-0"
            />
          </div>
          {/* third column */}
          <div
            className=" py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90
            text-white rounded-3xl relative h-[320px] flex items-start"
          >
            {/* category text section */}
            <div>
              <div className="mb-4">
                <p className=" mb-[2px] text-white">Enjoy</p>
                <p className=" text-2xl font-semibold mb-[2px]">With</p>
                <p className=" text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Gadget
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandBlue"}
                />
              </div>
            </div>
            <img
              src={Image3}
              alt="Category image"
              className=" absolute w-[200px] -right-0 bottom-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category2;
