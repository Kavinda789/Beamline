import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

function Carousel() {
  const SliderImages = [
    {
      _id: "1",
      image: assets.carousel_1,
    },
    {
      _id: "2",
      image: assets.carousel_2,
    },
    {
      _id: "3",
      image: assets.carousel_3,
    },
  ];

  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) {
      setCurrent(SliderImages.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  let nextSlide = () => {
    if (current === SliderImages.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    // <div className="flex justify-center dark:bg-black/100">
    //   <div className="w-[800px]">
    //     <img src={assets.carousel_3} alt="" />
    //   </div>
    // </div>

    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-40 `}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {SliderImages.map((data, index) => (
          <img src={data.image} key={index} alt="" />
        ))}
      </div>

      {/* <div
        className="absolute top-0 h-full w-full justify-between items-center
      flex text-white"
      >
        <button onClick={previousSlide}>
          <BsArrowLeftCircle />
        </button>
        <button onClick={nextSlide}>
          <BsArrowRightCircle />
        </button>
      </div> */}

      <div className="absolute bottom-0 py-4 flex justify-center gap-2 w-full">
        {SliderImages.map((data, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"cricle" + i}
              className={`rounded-full w-2 h-2 ${
                i == current ? "bg-white" : "bg-gray-200"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
