import React from "react";
import Heading from "../Shared/Heading";
import img1 from "../../assets/blogs/blog-1.jpg";
import img2 from "../../assets/blogs/blog-2.jpg";
import img3 from "../../assets/blogs/blog-3.jpg";

const Blog = () => {
  const blogData = [
    {
      title: "How to choose perfect smartwatch",
      subtitle:
        "minima facere deserunt vero illo beatae \
        deleniti eius dolores consequuntur, eligendi corporis maiores molestiae",
      published: "Jan 20, 2024 by Dilshad",
      image: img1,
      aosDelay: "0",
    },

    {
      title: "How to choose perfect gadget",
      subtitle:
        "minima facere deserunt vero illo beatae \
          deleniti eius dolores consequuntur, eligendi corporis maiores molestiae",
      published: "Jan 20, 2024 by Satya",
      image: img2,
      aosDelay: "200",
    },

    {
      title: "How to choose perfect VR headset",
      subtitle:
        "minima facere deserunt vero illo beatae \
          deleniti eius dolores consequuntur, eligendi corporis maiores molestiae",
      published: "Jan 20, 2024 by Sabir",
      image: img3,
      aosDelay: "400",
    },
  ];
  return (
    <div className=" py-12 pl-4 pr-4">
      <div className="container">
        {/* Blog header section */}
        <Heading title={"Recent News"} subtitle={"Explore Our Blogs"} />

        <div
          className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
      gap-6 gap-y-8 sm:gap-4 md:gap-7 "
        >
          {/* Blog body section */}
          {blogData.map((item) => (
            <div
              data-aos="fade-up"
              data-aos-delay={item.aosDelay}
              key={item.id}
              className=" bg-white dark:bg-gray-900"
            >
              <div className=" overflow-hidden rounded-2xl">
                {/* Image section */}
                <img
                  src={item.image}
                  className=" w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                  alt="Blog image"
                />
              </div>
              <div className=" space-y-2">
                {/* Content section*/}
                <p className=" text-xs text-gray-500">{item.published}</p>
                <p className=" font-bold line-clamp-1">{item.title}</p>
                <p className=" line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
