import { Github, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#051422] h-52 w-full flex flex-wrap items-center justify-between text-5xl text-white px-10" id='footer'>
    <div className='w-fit'>
      <Image src={"/footer-moonex.svg"} alt='mooonex' height={150} width={150}/>
    </div>
    <div className='hidden lg:flex'>
      <ul className='flex items-center justify-center gap-14 text-white font-semibold text-lg'>
        <li> <a href="#about">About Us</a> </li>
        <li> <a href="#about">Roadmap</a> </li>
        <li> <a href="#faq">FAQs</a> </li>
        <li> <a href="#footer">Contact Us</a> </li>
      </ul>
    </div>
    <div className='text-center'>
      <div className='text-3xl font-semibold'
      style={{ fontFamily: "var(--font-raleway)" }}
      ><span className='text-[#E4B40D]'>Contact</span> Us</div>
      <div className='flex items-center justify-center gap-3 pt-3'>
        <a href="https://github.com/bhagesh01" target='_blank' className='p-3 rounded-full hover:bg-[#273a4ceb] transition-all ease-in-out duration-300'>
        <Github />
        </a>
        <a href="https://x.com/BansodeBha11285" target='_blank' className='p-3 rounded-full hover:bg-[#273a4ceb] transition-all ease-in-out duration-300'>
        <Twitter />
        </a>
        <a href="https://www.linkedin.com/in/bhagesh-bansode-011770293/" target='_blank' className='p-3 rounded-full hover:bg-[#273a4ceb] transition-all ease-in-out duration-300'>
        <Linkedin />
        </a>
      </div>
    </div>
  </footer>
  )
}

export default Footer