import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/macbook.png";
import Button from "../Shared/Button";

const Hero = ({ handleOrderPopup }) => {
  const heroData = [
    {
      id: 1,
      subtitle: "Beats Solo",
      title: "Wireless",
      title1: "subtitle",
      title2: "Headphone",
      image: Image1,
      description: "",
    },

    {
      id: 2,
      subtitle: "Beats Solo",
      title: "Wireless",
      title1: "subtitle",
      title2: "Virtual",
      image: Image2,
      description: "",
    },
    {
      id: 3,
      subtitle: "Beats Solo",
      title: "Branded",
      title1: "subtitle",
      title2: "Macbook",
      image: Image3,
      description: "",
    },
    // {
    //   id: 4,
    //   subtitle: "subtitle",
    //   title: "subtitle",
    //   title1: "subtitle",
    //   title2: "subtitle",
    //   image: "subtitle",
    // },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container pl-4 pr-4">
      <div
        className=" overflow-hidden rounded-3xl min-h-[550px] sm:w-[100%]
                    sm:min-h-[650px] hero-bg-color flex justify-center items-center"
      >
        <div className="container pb-8 sm:pb-0">
          {/* Hero section */}
          <Slider {...settings}>
            {heroData.map((item) => (
              <div key={item.id}>
                <div className=" grid grid-cols-1 sm:grid-cols-2">
                  {/* text content section */}
                  <div
                    className=" flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center
                                   sm:text-left order-2 sm:order-1 relative z-10 sm:translate-x-12"
                  >
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className=" text-2xl sm:text-6xl lg:text-2xl font-bold"
                    >
                      {item.subtitle}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className=" text-5xl sm:text-6xl lg:text-7xl font-bold"
                    >
                      {item.title}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className=" text-5xl uppercase text-white dark:text-white/5 sm:text-[80px]
                                    md:text-[100px] xl:text-[150px] font-bold"
                    >
                      {item.title2}
                    </h1>
                    <div
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="500"
                      data-aos-delay="300"
                    >
                      <Button
                        text="Shop By Category"
                        textColor="text-white"
                        bgColor="bg-primary"
                        handler={handleOrderPopup}
                      />
                    </div>
                  </div>

                  {/* image section */}
                  <div className="order-1 sm:order-2">
                    <div
                      data-aos="zoom-in"
                      data-aos-once="true"
                      className=" relative z-10"
                    >
                      <img
                        src={item.image}
                        alt="slider image"
                        className=" w-[65%] h-[90%] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-110
                                  object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* Hero section */}
      </div>
    </div>
    // <div className="container">
    //   <div
    //     className="overflow-hidden rounded-3xl min-h-[550px]
    //                sm:min-h-[650px] hero-bg-color "
    //   >
    //     <div className="container pb-8 sm:pb-0">
    //       {/* Hero section */}
    //       <Slider {...settings}>
    //         {heroData.map((item, index) => (
    //           <div key={item.id}>
    //             <div className="grid grid-cols-1 sm:grid-cols-2">
    //               {/* text section */}
    //               <div>
    //                 <h1>{item.subtitle}</h1>
    //                 <h1>{item.title}</h1>
    //                 {/* <h1>{item.title1}</h1> */}
    //                 <h1>{item.title2}</h1>
    //                 <div>
    //                   <button>Shop Now</button>
    //                 </div>
    //               </div>
    //               {/* image section */}
    //               <div>
    //                 <div>
    //                   <img
    //                     src={item.image}
    //                     className=" w-[300px] h-[300px] sm:h-[450px] sm:scale-105
    //                                 lg:scale-110 object-contain mx-auto
    //                                 drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]
    //                                 "
    //                     alt="slider image"
    //                   />
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </Slider>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Hero;
