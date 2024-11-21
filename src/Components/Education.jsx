import React from 'react'
import Image from 'next/image'
const Education = () => {
  return (
    <div className=' '>
        <h1 className='font-bold text-2xl md:text-3xl lg:text-3xl text-center mt-12'>Key Solution</h1>
    <div className="min-h-screen p-6 md:p-12 mt-16">

        <div className="max-w-full relative mx-auto flex flex-col md:flex-row justify-end">
        <div className="absolute w-[18rem] h-[18rem] md:-left-16 -top-6  md:w-1/2"> 
        <Image
        src="education.svg"
        alt="Background"
        layout="responsive"
        width={500}
        height={500}
        
        />
        </div>
        <div className="w-full max-w-xl mt-[20rem] md:w-1/2 md:-mt-0 space-y-16">
          <section>
            <h2 className="text-[#2d3748] text-2xl font-semibold mb-4">Learning Management System (LMS)</h2>
            <p className="text-[#4a5568] leading-relaxed">
              Our LMS supports online and hybrid learning with interactive virtual classrooms, student progress tracking, content management, and analytics. Built to engage and personalize the learning journey.
            </p>
          </section>

          <section>
            <h2 className="text-[#2d3748] text-2xl font-semibold mb-4">School Management System (SMS)</h2>
            <p className="text-[#4a5568] leading-relaxed">
              Streamline operations with a centralized SMS that covers attendance, grading, scheduling, and communication, ensuring efficient school management and clear communication between faculty, students, and parents
            </p>
          </section>

          <section>
            <h2 className="text-[#2d3748] text-2xl font-semibold mb-4">Website & Portal Development</h2>
            <p className="text-[#4a5568] leading-relaxed">
              We create engaging, secure websites and portals tailored for educational institutions, featuring easy content management, event calendars, student/faculty access, and more.
            </p>
          </section>

          <section>
            <h2 className="text-[#2d3748] text-2xl font-semibold mb-4">Data Analytics & Reporting</h2>
            <p className="text-[#4a5568] leading-relaxed">
              Empower your institution with data-driven insights, helping administrators and educators make informed decisions based on real-time analytics on student performance and engagement.
            </p>
          </section>

          <section>
            <h2 className="text-[#2d3748] text-2xl font-semibold mb-4">Mobile Solutions for Education</h2>
            <p className="text-[#4a5568] leading-relaxed">
              Ensure students, faculty, and parents have access to key resources on-the-go with mobile-compatible platforms, enabling flexible learning anytime, anywhere.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <button className="px-6 py-3 bg-[#38bdf8] text-white rounded-md hover:bg-[#0ea5e9] transition-colors">
              What&apos;s Your Project
            </button>
            <button className="px-6 py-3 border-2 border-[#38bdf8] text-[#38bdf8] rounded-md hover:bg-[#38bdf8] hover:text-white transition-colors">
              Our Creation
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Education