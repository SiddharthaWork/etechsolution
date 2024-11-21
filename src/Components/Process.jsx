import React from "react";
import Image from "next/image";

const Process = () => {
  const steps = [
    {
      icon: "/research.svg",
      title: "1. Research and Ideation",
      description: "Understand the educational gaps, challenges, and user needs. This could involve surveying students, educators, or institutions to understand their pain points."
    },
    {
      icon: "/p2.svg",
      title: "2. Solution Design and Planning",
      description: "Outline user personas (e.g., students, teachers, administrators) and their specific needs to guide the development of user-centric features."
    },
    {
      icon: "/p3.svg",
      title: "3. Development and Content Creation",
      description: "Begin coding and building the front-end and back-end of the application. Implement core features such as user authentication, content management, and reporting."
    },
    {
      icon: "/p4.svg",
      title: "4. Testing and Quality Assurance",
      description: "Conduct user testing with educators and students to gather feedback on functionality, design, and usability."
    },
    {
      icon: "/p5.svg",
      title: "5. Implementation and Launch",
      description: "Deploy the application in a live environment, ensuring minimal downtime and a smooth user experience."
    },
    {
      icon: "/p6.svg",
      title: "6. Monitoring and Continuous Improvement",
      description: "Regularly monitor performance metrics, user engagement, and educational outcomes to gauge the solution's effectiveness."
    }
  ];

  return (
    <div className="w-full h-full mb-44 mt-24">
      <h1 className="text-center text-2xl sm:text-4xl font-nunito font-semibold mb-8">
        Process of EdTech Solution
      </h1>
      <div className="max-w-8xl mx-auto relative bg-white p-6 sm:px-24">
        <div className="h-auto"></div>

        {/* Steps Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:hidden lg:hiddden xl:block md:absolute left-[30rem] top-4 bottom-0 w-full">
            <img src="line.svg" alt="" />
          </div>

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-center gap-12 lg:gap-[14rem] xl:gap-[34rem]"
              >
                {/* Icon */}
                <div className="relative left-0 sm:left-[12rem] z-10 my-4 sm:my-10 w-24 h-24 lg:w-24 lg:h-24 flex items-center justify-center bg-white rounded ">
                  {typeof step.icon === "string" ? (
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={100}
                      height={100}
                    />
                  ) : (
                    <step.icon className="w-8 h-8 text-gray-600" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-3 max-w-8xl">
                  <div className="relative px-10 pb-20 sm:px-24 py-10 sm:py-10 lg:px-6 lg:py-10 bg-gradient-to-br from-sky-200 to-sky-400 rounded-tr-full rounded-br-full rounded-bl-full text-black shadow-lg">
                    <h3 className="text-lg md:text-xl font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-800">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
