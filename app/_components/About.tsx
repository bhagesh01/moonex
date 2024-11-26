import AboutTable from '@/components/shared/about/AboutTable';
import Features from '@/components/shared/about/Features';
import { MessageCircleQuestion } from 'lucide-react';
import React from 'react';

const About = () => {
  return (
    <div className={`
    min-h-screen pt-14 px-10 md:px-20 font-semibold
    `} id='about'>
      <h1 className={`
      text-5xl text-white flex items-center justify-start gap-3 mt-5
      `}
      style={{ fontFamily: "var(--font-raleway)" }}
      >
        My <span className='text-[#E4B40D]'>MoonEX</span>
        <MessageCircleQuestion className='h-14 w-14' />
      </h1>
      <AboutTable/>
      <Features/>
    </div>
  );
}

export default About;
