import React from 'react';
import { LuHome,LuUser,LuLightbulb,LuLayers, LuPhone } from "react-icons/lu";
import bash from './icons/bash.svg';
import docker from './icons/docker.svg';
import k8s from './icons/kubernetes.svg';
import selenium from './icons/selenium.svg';
import tailwind from './icons/tailwind.svg';
import mongo from './icons/mongodb.svg';
import { DotLottiePlayer, Controls } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';   
import Animation from './lottiefiles/skills.lottie'; 

const skills = () => {
  return (
    <div className='md:p-22 md:pt-24 p-8 flex justify-between md:pb-22 md:px-40 md:h-full select-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] bg-[white] md:mt-0 mt-6 pt-16'>
        <div className=''>
            <div className='md:w-6/12'>
                <div className='md:w-28 md:h-7 rounded-full w-20 h-5 bg-black md:px-1 space-x-3.5 mb-6'>
                    <LuLightbulb className='md:inline-block text-white font-semibold relative md:left-1.5 hidden scale-50 md:scale-100 md:-top-px' size={22}/>
                    <span className='text-white font-poppins text-xs md:text-xs font-normal md:font-medium relative md:-left-0 -left-0 md:-top-0 -top-1 md:pb-0'>My Skills</span>
                </div>
            </div>
            <div>
                <h1 className='font-poppins text-4xl font-medium'>My <span className='bg-gradient-to-r from-[#833be7cb] to-[#5521c5] bg-clip-text text-transparent'>Technical</span><br className='md:block hidden'/> Experience/<span className='md:hidden block'> </span><span>Skills.</span></h1>
                <hr className='md:w-44 w-32 md:mb-0 mb-4 h-3 mt-3 md:ml-0 lg:mt-4 bg-gradient-to-r from-[#bf77eced] to-[#c580f0c8]'></hr>
            </div>
            <div>
<div className='md:w-full md:h-12 md:mt-10'>
    <h1 className='md:font-semibold font-bold md:text-2xl md:pt-1.5 md:inline-block md:mr-5 md:mb-0 mb-1'>Software Tools and Platforms</h1>
    <img src="https://skillicons.dev/icons?i=figma" alt="figma" style={{ width: 45, height: 45 }} className='inline md:pb-3 mr-2'/>
    <img src="https://skillicons.dev/icons?i=azure" alt="azure" style={{ width: 45, height: 45 }} className='inline md:pb-3 mr-2'/>
    <img src="https://skillicons.dev/icons?i=visualstudio" alt="visualstudio" style={{ width: 45, height: 45 }} className='inline md:pb-3 mr-2'/>
    <img src="https://skillicons.dev/icons?i=selenium" alt="selenium" style={{ width: 45, height: 45 }} className='inline md:pb-4 mr-2'/>
    <img src="https://skillicons.dev/icons?i=vscode" alt="vscode" style={{ width: 45, height: 45 }} className='inline md:pb-3 mr-2'/>
    <img src="https://skillicons.dev/icons?i=github" alt="github" style={{ width: 45, height: 45 }} className='inline md:pb-3 mr-2'/>
</div>

<div>
    <h1 className='md:font-semibold font-bold md:text-2xl md:pt-2 md:inline-block md:mr-5 md:mb-0 mb-1'>Databases and Data Tools</h1>
    <img src="https://skillicons.dev/icons?i=mongodb" alt="mongodb" style={{ width: 45, height: 45 }} className='inline md:pb-3 mr-2'/>
    <img src="https://skillicons.dev/icons?i=mysql" alt="mysql" style={{ width: 45, height: 45 }} className='inline md:pb-3 mr-2'/>
</div>

<div>
    <h1 className='md:font-semibold font-bold md:text-2xl md:pt-1.5 md:inline-block md:mr-5 md:mb-0 mb-2.5 md:mt-0 mt-2'>Programming Languages and Frameworks</h1>
    <img src="https://skillicons.dev/icons?i=python" alt="python" style={{ width: 45, height: 45 }} className='inline md:pb-3 mr-2'/>
    <img src="https://skillicons.dev/icons?i=javascript" alt="javascript" style={{ width: 45, height: 45 }} className='inline md:pb-3 mr-2'/>
    <img src="https://skillicons.dev/icons?i=nodejs" alt="nodejs" style={{ width: 45, height: 45 }} className='inline md:pb-3 mr-2'/>
    <img src="https://skillicons.dev/icons?i=angular" alt="angular" style={{ width: 45, height: 45 }} className='inline md:pb-3 mr-2'/>
    <img src="https://skillicons.dev/icons?i=css" alt="css" style={{ width: 45, height: 45 }} className='inline md:pb-3 mr-2'/>
    <img src="https://skillicons.dev/icons?i=html" alt="html" style={{ width: 45, height: 45 }} className='inline md:pb-3 mr-2'/>
</div>

<div>
    <h1 className='md:font-semibold font-bold md:text-2xl md:pt-1.5 md:inline-block md:mr-5 md:mb-0 mb-2 md:mt-0 mt-2'>Methods and Techniques</h1>
    <img src="https://skillicons.dev/icons?i=code" alt="programming" style={{ width: 45, height: 45 }} className='inline md:pb-3 mr-2'/>
</div>

<div>
    <h1 className='md:font-semibold font-bold md:text-2xl md:pt-1.5 md:inline-block md:mr-5 md:mb-0 mb-2 md:mt-0 mt-2'>General Skills and Abilities</h1>
    <img src="https://skillicons.dev/icons?i=office" alt="office" style={{ width: 45, height: 45 }} className='inline md:pb-3 mr-2'/>
    <img src="https://skillicons.dev/icons?i=excel" alt="excel" style={{ width: 45, height: 45 }} className='inline md:pb-3 mr-2'/>
</div>



            </div>
        </div>
        <div className='hidden lg:block'>
            <DotLottiePlayer
                src={Animation}
                autoplay
                loop
            >
            </DotLottiePlayer>
        </div>
    </div>
    )
}
export default skills;