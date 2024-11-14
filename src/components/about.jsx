import React from 'react';
import { LuHome, LuUser, LuLightbulb, LuLayers, LuPhone, LuLanguages } from "react-icons/lu";
import { GoDot } from "react-icons/go";

const about = () => {
  return (
    <div className='md:p-22 md:pt-24 md:pb-22 md:px-40 md:h-full select-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] bg-[white] p-8 md:flex justify-normal space-x-28 md:mt-0 mt-6 pt-16'>
      <div className='md:w-6/12'>
        <div className='md:w-28 md:h-7 rounded-full w-20 h-5 bg-black md:px-1 space-x-3.5 mb-6'>
          <LuUser className='md:inline-block text-white font-semibold relative md:left-1.5 hidden scale-50 md:scale-100' size={22}/>
          <span className='text-white font-poppins text-xs md:text-xs font-normal md:font-medium relative md:-left-0 -left-1 md:-top-0 -top-1 md:pb-0 pb-2 md:pt-0'>About me</span>
        </div>
        <div className='md:pt-5'>
          <h1 className='md:text-5xl text-4xl md:font-medium font-semibold'>Eduan <br className='md:hidden'/><span className='bg-gradient-to-r from-[#833be7cb] to-[#5521c5] bg-clip-text text-transparent md:w-48'>Roci </span><br/> <span className='md:text-4xl text-3xl font-poppins font-normal md:font-medium'>Based In Switzerland.</span></h1>
          <hr className='md:w-44 w-32 md:mb-0 mb-4 h-3 mt-3 md:ml-0 lg:mt-4 bg-gradient-to-r from-[#c580f0ed] to-[#c580f0c8]'></hr>
        </div>
        <div className='md:w-12/12 md:mt-10'>
          <h1 className='font-poppins text-justify'>I am an engineer enthusiast from Bern, Switzerland, with a strong passion for coding in Python and building automations. Currently completing my Bachelor's in Business Informatics, I bring a unique approach to problem-solving and a drive for continuous learning. My experience spans IT support and self-taught technologies, enabling me to adapt quickly to new challenges. With an eye for innovation and efficiency, I'm eager to collaborate with dynamic teams to create impactful, high-quality solutions.</h1>
        </div>

        {/* Video Section */}
        <div className='md:mt-8 mt-6'>
          <h2 className='text-2xl font-poppins font-medium'>My Introduction Video (in progress)</h2>
          <video className='md:w-full w-11/12 mt-4' controls>
            <source src="path/to/your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      
      <div className="relative md:-left-0 -left-28 md:pt-4 pt-12 space-y-10 md:space-y-8">
  {/* Languages Section */}
  <div className="md:w-96 space-y-3">
    <h1 className="text-3xl font-poppins font-medium md:ml-10">Languages</h1>
    <hr className="md:w-64 w-32 md:mb-0 mb-2 md:h-1 h-1 mt-3 md:ml-10 bg-gradient-to-r from-[#c580f0ed] to-[#c580f0c8]" />
    {["English", "German", "Albanian", "French"].map((language, index) => (
      <h1 key={index} className="md:mt-2 md:ml-2 font-poppins">
        <GoDot className="inline" />
        <span className="md:pl-12 text-xl pl-4">{language}</span>
      </h1>
    ))}
  </div>

  {/* Nationality Section */}
  <div className="md:w-96 space-y-3">
    <h1 className="text-3xl font-poppins font-medium md:ml-10">Nationality</h1>
    <hr className="md:w-64 w-32 md:mb-0 mb-4 md:h-1 h-1 mt-3 md:ml-10 bg-gradient-to-r from-[#c580f0ed] to-[#c580f0c8]" />
    <h1 className="md:mt-4 md:ml-2 font-poppins">
      <GoDot className="inline" />
      <span className="md:pl-12 text-xl pl-4">Swiss</span>
    </h1>
  </div>

  {/* Hobbies Section */}
  <div className="md:w-96 space-y-3">
    <h1 className="text-3xl font-poppins font-medium md:ml-10">Hobbies</h1>
    <hr className="md:w-64 w-32 md:mb-0 mb-2 md:h-1 h-1 mt-3 md:ml-10 bg-gradient-to-r from-[#c580f0ed] to-[#c580f0c8]" />
    {["Gym", "Gaming", "Going out with Friends", "Programming"].map((hobby, index) => (
      <h1 key={index} className="md:mt-2 md:ml-2 font-poppins">
        <GoDot className="inline" />
        <span className="md:pl-12 text-xl pl-4">{hobby}</span>
      </h1>
    ))}
  </div>

  {/* Communities Section */}
  <div className="md:w-96 space-y-3">
    <h1 className="text-3xl font-poppins font-medium md:ml-10">Communities</h1>
    <hr className="md:w-64 w-32 md:mb-0 mb-2 md:h-1 h-1 mt-3 md:ml-10 bg-gradient-to-r from-[#c580f0ed] to-[#c580f0c8]" />
    {["Mensa, The High IQ Society", "Swiss Albanian Network"].map((community, index) => (
      <h1 key={index} className="md:mt-2 md:ml-2 font-poppins">
        <GoDot className="inline" />
        <span className="md:pl-12 text-xl pl-4">{community}</span>
      </h1>
    ))}
  </div>
</div>

    </div>
  )
}
export default about;
