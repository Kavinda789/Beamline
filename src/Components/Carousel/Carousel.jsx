import React, { useState } from "react";
import { assets } from "../../assets/assets";
import Slider from "react-slick";

function Carousel() {
  const SliderImages = [
    {
      _id: "1",
      image: assets.carousel_1,
      title: "Get discounts for your constructions",
      description:
        "Unlock 10% off on all constructions! Build your dream space while saving big today",
    },
    {
      _id: "2",
      image: assets.carousel_2,
      title: "Our architectural design services focus on creating innovative",
      description:
        "a",
    },
    {
      _id: "3",
      image: assets.carousel_3,
      title: "Looking for a quality and affordable constructor for your next project",
      description:
        "b",
    },
  ];

  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  let [current, setCurrent] = useState(0);

  return (
    <div
      className="relative overflow-hidden min-h-[550px]
    sm:min-h-[650px] bg-gray-100 flax justify-center items-center 
    dark:bg-gray-950 dark:text-white duration-200"
    >
      <div className=" pb-8 sm:pb-0">
        <Slider {...settings}>
          {SliderImages.map((data, i) => (
            <div className="overflow-hidden relative">
              <div
                className={`flex transition ease-out duration-40 `}
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                <img src={data.image} key={i} alt="" />

                <div
                  className="absolute flex flex-col gap-10 sm:pt-32
                 text-center sm:text-left order-2 sm:order-1 px-6"
                >
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase text-white">
                    {data.title}
                  </h1>
                  <p className="text-sm font-mono font-bold">{data.description}</p>
                  <div>
                    <button
                      className="bg-gradient-to-r from-primary
                  to-secondary hover:scale-105 duration-200 text-white
                  py-2 px-2 rounded-full"
                    >
                      More Info
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 py-4 flex justify-center gap-2 w-full">
                {SliderImages.map((i) => {
                  return (
                    <div
                      onClick={() => {
                        setCurrent(i);
                      }}
                      key={"cricle" + i}
                      className={`rounded-full w-2 h-2 ${
                        i == current ? "bg-white w-4" : "bg-gray-200"
                      }`}
                    ></div>
                  );
                })}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
