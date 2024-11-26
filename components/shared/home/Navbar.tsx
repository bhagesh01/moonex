"use client"
import { ArrowRight, Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import 'animate.css';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/');

  const menuLinks = [
    {
      id: 1,
      name: "Home",
      url: "/"
    },
    {
      id: 2,
      name: "About Us",
      url: "#about"
    },
    {
      id: 3,
      name: "Roadmap",
      url: "#roadmap"
    },
    {
      id: 4,
      name: "Faq",
      url: "#faq"
    },
    {
      id: 5,
      name: "Contact Us",
      url: "#footer"
    },
  ];

  return (
    <div className='w-full md:px-28 px-12 pt-8 flex items-center justify-between relative
    animate__animated
    animate__fadeInDown
    '>
      <div>
        <Image src="./logo.svg" alt="logo" height={40} width={194}/>
      </div>
      <div>
        <ul className='lg:flex items-center justify-center gap-16 text-base font-medium hidden'>
          {
            menuLinks.map((listItem) => (
              <li key={listItem.id}>
                <Link 
                  href={listItem.url}
                  // Change text color based on active link
                  className={`${activeLink === listItem.url ? 'text-[#E4B40D]' : 'text-white'} cursor-pointer`}
                  onClick={() => setActiveLink(listItem.url)}
                >
                  {listItem.name}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
      <div>
        <button 
          className='lg:flex items-center px-6 py-2 rounded-full font-semibold bg-gradient-to-r from-[#E4B40D] to-[#FFE68F] hover:px-7 transition-all ease-in-out text-black group whitespace-nowrap hidden'
          style={{ fontFamily: "var(--font-raleway)" }}
        >
          Connect Wallet
          <span 
            className="ml-2 opacity-0 w-0 
            group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 
            group-hover:pr-4
            transition-transform duration-700 ease-in-out"
          >
            <ArrowRight />
          </span>
        </button>
      </div>
        


      <DropdownMenu>
  <DropdownMenuTrigger className=' lg:hidden bg-transparent' asChild>
   <Button variant={'myButton'} className='bg-transparent'>
   <Menu className='text-black' />
   </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className='px-6'>
    <DropdownMenuSeparator />
    {
      menuLinks.map((listItem)=>{
        return(
          <DropdownMenuItem key={listItem.id} className='text-base font-medium'>
            <Link href={`#${listItem.url}`}>
            {listItem.name}
            </Link>
          </DropdownMenuItem>
        )
      })
    }
    <DropdownMenuItem>
      <button className='flex items-center px-6 py-2 rounded-full font-semibold bg-gradient-to-r from-[#E4B40D] to-[#FFE68F] transition-all ease-in-out text-black group whitespace-nowrap '
      style={{ fontFamily: "var(--font-raleway)" }}
      >
        connect wallet
      </button>
    </DropdownMenuItem>
    
  </DropdownMenuContent>
</DropdownMenu>

    </div>
  );
};

export default Navbar;
