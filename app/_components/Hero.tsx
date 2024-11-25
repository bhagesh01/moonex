import Navbar from '@/components/shared/home/Navbar'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='min-h-[90vh] md:min-h-screen relative' id='home'>
      <Image 
      src={"./top-bg-yellow-gradient.svg"} 
      alt="gradient" height={500} width={500} className='absolute -left-20 top-0 opacity-30 md:left-0' />
      <Image 
      src={"./circles.svg"} 
      alt="gradient" height={0} width={0} className='absolute md:top-20 top-0 md:left-0 w-full h-full' />
      <Image 
      src={"./top-bg-yellow-gradient.svg"} 
      alt="gradient" height={200} width={300} className='absolute right-4 top-96 rounded-full opacity-20 md:right-0' />
      <Image 
      src={"./big-star.svg"} 
      alt="gradient" height={40} width={40} className='absolute top-40 left-32 lg:top-44 lg:ml-36 md:h-20 md:w-20 ' />
      <Image 
      src={"./small-star.svg"} 
      alt="gradient" height={30} width={30} className='absolute top-[32rem] right-10 md:h-20 md:w-20 hidden lg:block' />
      <Image src={"/big-yellow-circle.svg"} alt="circle" height={290} width={300} className='absolute right-4 
      lg:right-2 top-28 lg:top-2 lg:w-[32rem]'/>
      <Navbar/>
      <div style={{ fontFamily: "var(--font-raleway)" }} className='text-4xl lg:text-7xl relative z-10 font-semibold mt-64 lg:mt-48 lg:ml-64 ml-14'>
        <h1 className='whitespace-nowrap text-white mb-2'>Trusted Multi-Chain</h1><br/>
        <h1 className='text-white lg:-mt-20 -mt-10'><span className='text-[#E4B40D]'>DEX</span> Platform</h1>
        <p className='text-sm lg:text-lg leading-4 lg:-mt-2 pt-4 text-gray-500 font-light'>
Trade, earn, and own crypto on the all-in-one multi-chain DEX</p>

    <div className='relative flex items-center justify-start pl-14 text-lg gap-4 pt-8'>
      <button className='px-4 lg:px-8 py-2 lg:py-3 text-sm lg:text-lg bg-[#E4B40D] hover:bg-[#ffd84d] rounded-full'>Connect Wallet</button>
      <button className='px-6 lg:px-10 py-2 lg:py-3 text-sm lg:text-lg border-2 border-[#E4B40D] hover:bg-[#172129] rounded-full text-[#E4B40D]'>Trade Crypto</button>
    </div>
      </div>
    </div>
  )
}

export default Hero