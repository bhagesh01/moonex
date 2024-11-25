import Image from 'next/image'
import React from 'react'

const Features = () => {
  const featuresContent = [
    {
      id:1,
      icon:"Dollar.svg",
      title:"Cheapest TXs",
      description:"Exchange popular digital currencies at cheapest possible transaction price."
    },
    {
      id:2,
      icon:"Shield_Check.svg",
      title:"CerTIK",
      description:"We are audited by Certik. Certik is a leading security focused"
    },
    {
      id:3,
      icon:"Phone_Off.svg",
      title:"No Contract Sells",
      description:"No contract sells to fund the marketing wallets."
    },
    {
      id:4,
      icon:"support.svg",
      title:"CrossDex Support",
      description:"Exchange popular digital currencies at cheapest possible transaction price."
    },
  ]
  return (
    <div className='w-full mt-14'>
         <div className='flex items-center justify-center text-4xl text-white'
         style={{ fontFamily: "var(--font-raleway)"}}
         >
          <span>Our <span className='text-[#E4B40D]'>Features</span> </span>
         </div>

         <div className="w-full flex justify-center items-center">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:flex mt-10 gap-10">
   
   {
    featuresContent.map((feature)=>{
      return(
        <div key={feature.id} className="w-[20rem] h-52 bg-gray-600 rounded-xl pl-4 pr-6 pt-4" id='glass-effect'>
          <div className='mb-3 p-4 rounded-full bg-[#212F3A] w-fit'>
          <Image src={`/${feature.icon}`} alt='dollar'
          height={30}
          width={30}
          />
          </div>
          <h1 className='font-normal text-2xl pt-5 text-white'>{feature.title}</h1>
          <p className='font-normal leading-5 pt-2 text-gray-500'>{feature.description}</p>
        </div>
      )
    })
   }

  </div>
</div>
         </div>
  )
}

export default Features