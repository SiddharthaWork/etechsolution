import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

const Things = () => {
  return (
    <div className="relative min-h-[550px] bg-[#0D0B19]/40 p-6 flex flex-col items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/world.svg" // Replace with your image path
          alt="Background"
        //   layout=""
        width={2000}
        height={10}
          objectPosition="center"
          quality={100}
          className="top-[64rem] "
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Content */}
      <h2 className="text-3xl md:text-4xl font-medium text-white my-12">
        Why Choose Our EdTech Solution?
      </h2>
      <div className="w-full max-w-4xl">
        <div className="space-y-4">
          <div className="border-none mx-auto">
            <button
              className="bg-[#86D1F3] font-nunito text-xl hover:bg-sky-500 px-6 py-4 text-black w-full focus:outline-none flex justify-between items-center"
            >
              <div className="flex-1 text-center font-bold">
                Customizable and Scalable
              </div>
              <IoIosArrowDown className="text-black" />
            </button>
          </div>

          <div className="border-none">
            <button
              className="bg-[#86D1F3] font-nunito text-xl hover:bg-sky-500 px-6 py-4 text-black w-full focus:outline-none flex justify-between items-center"
            >
              <div className="flex-1 text-center font-bold">
                Secure & Reliable
              </div>
              <IoIosArrowDown className="text-black" />
            </button>
          </div>

          <div className="border-none">
            <button
              className="bg-[#86D1F3] font-nunito text-xl hover:bg-sky-500 px-6 py-4 text-black w-full focus:outline-none flex justify-between items-center"
            >
              <div className="flex-1 text-center font-bold">
                User-Friendly Interface
              </div>
              <IoIosArrowDown className="text-black" />
            </button>
          </div>

          <div className="border-none">
            <button
              className="bg-[#86D1F3] font-nunito text-xl hover:bg-sky-500 px-6 py-4 text-black w-full focus:outline-none flex justify-between items-center"
            >
              <div className="flex-1 text-center font-bold">
                Comprehensive Support
              </div>
              <IoIosArrowDown className="text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Things;
