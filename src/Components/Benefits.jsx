import React from "react";
import Image from "next/image";

const Benefits = () => {
  return (
    <div className="relative pt-2 pb-24">
      <div className="absolute inset-0 z-0">
      <img
          src="benefits.svg"
          className="w-full h-full object-cover opacity-60"
          alt="Background Header"
        />
      </div>

      <h1 className="relative text-4xl font-nuinto text-center my-16 z-40">
        Benefits of EdTech Solution
      </h1>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl gap-6 h-auto md:h-[865px] mx-auto place-items-center px-4 md:px-16">
          {/* Card 1 */}
          <div className="w-full max-w-[419px] h-[392px] space-y-2 bg-white text-black p-6 rounded-2xl relative">
            <h1 className="text-xl font-bold">Enhanced Engagement</h1>
            <p>
              Interactive and multimedia-rich content keeps students interested,
              ensuring improved learning outcomes.
            </p>
            <div className="absolute bottom-0 right-0">
              <div className="relative w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-tl-full bg-sky-200 hover:bg-sky-400">
                <span className="absolute bottom-[8%] right-[20%]  text-[4rem] md:text-[4rem] font-semibold">01</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full max-w-[419px] h-[392px] space-y-2 bg-white text-black p-6 rounded-2xl relative">
            <h1 className="text-xl font-bold">Accessibility</h1>
            <p>
              With online courses and flexible modules, learners can access content anytime, anywhere, allowing for convenient and uninterrupted learning experiences.
            </p>
            <div className="absolute bottom-0 left-0">
              <div className="relative w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-tr-full bg-sky-200 hover:bg-sky-400">
                <span className="absolute bottom-[8%] left-[20%]  text-[4rem] md:text-[4rem] font-semibold">02</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full max-w-[419px] h-[392px] space-y-2 bg-white place-content-end text-black p-6 rounded-2xl relative">
            <h1 className="text-xl font-bold">Personalized Learning</h1>
            <p>
              AI-driven recommendations and adaptive learning paths ensure that every learner receives content tailored to their needs and pace.
            </p>
            <div className="absolute -top-2 right-0">
              <div className="relative w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-bl-full bg-sky-200 hover:bg-sky-400">
                <span className="absolute bottom-[30%] right-[20%] text-[4rem] md:text-[4rem] font-semibold">03</span>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="w-full max-w-[419px] h-[392px]  space-y-2 bg-white place-content-end text-black p-6 rounded-2xl relative">
            <h1 className="text-xl font-bold">Real-Time Analytics</h1>
            <p>
              Educators and administrators gain insights into learner progress, enabling data-driven decisions and continuous improvement.
            </p>
            <div className="absolute -top-2 -left-[0.5px]">
              <div className="relative w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-br-full bg-sky-200 hover:bg-sky-400">
                <span className="absolute bottom-[30%] left-[20%]  text-[4rem] md:text-[4rem] font-semibold">04</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
