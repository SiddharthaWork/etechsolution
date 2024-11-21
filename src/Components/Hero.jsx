import React from 'react';
import Image from 'next/image';
const Hero = () => {
  return (
    <div className="bg-[#0F0B1E] relative w-full h-auto pt-12 pb-16 md:h-[27rem] overflow-hidden">
      <div className="absolute left-[30rem]  overflow-hidden overflow-x-hidden overflow-y-hidden">
        <img
          className="w-full pt-8 object-cover overflow-hidden opacity-80 mix-blend-overlay"
          src="background.svg"
          alt="background image"
        />
      </div>

      <div className='max-w-5xl mx-auto px-4'>

        <div className='text-white font-bold  pb-4 text-center'>
          <h1 className='text-2xl md:text-4xl lg:text-5xl'>
            EdTech Solution
          </h1>
          <p className='text-xl mt-2'>Technology-Driven Solutions for Modern Education</p>
        </div>

        <div className='text-white text-sm md:text-base lg:text-lg text-center max-w-5xl mx-auto mt-6'>
          <p>
            Our EdTech solutions are designed to support the evolving needs of educational institutions by integrating technology into the core of teaching, learning, and administration. We create comprehensive, user-centered platforms that enable schools, universities, and training centers to streamline operations, enhance student engagement, and improve educational outcomes. With a focus on scalability, security, and ease of use, our solutions empower educational institutions to meet the challenges of digital transformation effectively.
          </p>
        </div>

        <div className='flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 justify-center items-center mt-8'>
          <button className="relative px-6 py-2 bg-sky-500 text-white rounded overflow-hidden group">
            <span className="relative z-20">Quick Enquiry</span>
            <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-in-out z-10"></div>
          </button>

          <button className='px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-[#0F0B1E] transition duration-75 ease-in-out z-40'>
            Call Us: +977 9703958747
          </button>
        </div>

      </div>
    </div>
  );
}

export default Hero;
