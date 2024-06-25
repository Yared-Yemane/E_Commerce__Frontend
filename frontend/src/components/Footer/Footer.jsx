import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    {
      title: "Home",
      link: "/#",
    },

    {
      title: "About",
      link: "/#about",
    },

    {
      title: "Contact",
      link: "/#contact",
    },

    {
      title: "Blog",
      link: "/#blog",
    },
  ];
  return (
    <div className=" dark:bg-gray-950 pl-4 pr-4">
      <div className="container">
        <div className="grid grid-cols-3 pb-20 pt-5">
          {/* Company details */}
          <div className=" py-8 px-4">
            <a
              href="#"
              className=" text-primary font-semibold tracking-widest 
              text-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>
            <p className=" text-gray-600 dark:text-white/70 lg:pr-24 pt-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
              Eligendi totam consequatur <br />
              exercitationem
            </p>
            <p className=" text-gray-500 mt-4">
              Made with ❤️ by <b style={{ color: "black" }}>Yared Yemane</b>
            </p>
            <a
              href="https://github.com/Yared-Yemane"
              target="_blank"
              className=" inline-block bg-primary/90 text-white
               py-2 px-4 mt-4 text-sm rounded-full"
            >
              Visit my GitHub Channel
            </a>
          </div>
          {/* Footer links */}
          <div className=" col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            {/* First col links */}
            <div className=" py-8 px-4">
              <h1 className=" text-xl font-bold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className=" space-y-3">
                {footerLinks.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className=" text-gray-600 dark:text-gray-400 
                      hover:text-black dark:hover:text-white duration-300"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Second col links */}
            <div className=" py-8 px-4">
              <h1 className=" text-xl font-bold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className=" space-y-3">
                {footerLinks.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className=" text-gray-600 dark:text-gray-400 
                      hover:text-black dark:hover:text-white duration-300"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Company address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className=" text-xl font-bold sm:text-left mb-3">Address</h1>
              <div>
                <div className=" flex items-center gap-3 mb-4">
                  <FaLocationArrow />
                  <p>city, Region</p>
                </div>
                <div className=" flex items-center gap-3">
                  <FaMobileAlt />
                  <p>+85 1234567890</p>
                </div>
                {/* Social links */}
                <div className=" flex items-center gap-3 mt-6 ">
                  <a href="#">
                    <FaInstagram className=" text-3xl hover:text-primary duration-300" />
                  </a>
                  <a
                    href="#"
                    className=" text-3xl hover:text-primary duration-300"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="#"
                    className=" text-3xl hover:text-primary duration-300"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
