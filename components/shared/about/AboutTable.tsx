import Image from 'next/image'
import React from 'react'

const AboutTable = () => {

  const tableContents = [
    {
      id:1,
      title:"1. This is Point number one."
    },
    {
      id:2,
      title:"2. This is Point number two."
    },
    {
      id:3,
      title:"3. This is Point number three."
    },
    {
      id:4,
      title:"4. This is Point number four."
    },
    {
      id:5,
      title:"5. This is Point number five."
    },
    {
      id:6,
      title:"6. This is Point number six."
    },
  ]


  return (
    <div className='w-full h-[30rem] relative mt-10 rounded-3xl border-[1px]
    border-gray-700'
    id='glass-effect'
    >
      <Image src={"./Ellipse-gradient.svg"} alt='ellipse gradient' height={600} width={600} className='absolute opacity-30 top-20
      md:left-16
      rounded-full
      md:top-24
      md:w-[50rem]
      md:opacity-20
      '/>
     

      <div className='w-full h-[14.28%] flex rounded-tr-xl rounded-tl-xl'>
      <div className='w-[50%] h-full border-r-[1px] border-gray-700 flex items-center justify-center'>
        <span className='text-2xl lg:text-4xl text-[#E4B40D] font-semibold'
        style={{ fontFamily: "var(--font-raleway)" }}
        >Comparison</span>
      </div>
         <div className='w-[25%] h-full flex items-center justify-center border-r-[1px] border-gray-700'>
          <div className='w-full h-full relative'>
          <Image src={"/moonex-moon.svg"} alt='moonex'
          width={50} height={50}
          className='absolute md:left-12 md:-top-1 left-0 top-4 lg:w-24'/>
          <Image src={"/moonex.svg"} alt='moonex'
          width={100} height={100}
          className='ml-4 pt-7 lg:pt-4 lg:ml-20 lg:w-64'/>
          </div>
         </div>
      <div className='w-[25%] h-full flex items-center justify-center'>
        <Image src={"/uniswap.svg"} alt='uniswap' height={100} width={90}
        className='lg:w-36'
        />
      </div>
      </div>

      {
        tableContents.map((item)=>{
          return(
            <div key={item.id}
            className='w-full h-[14.28%] border-t-[1px] border-gray-700 flex'
            >
              <div className='w-[50%] h-full border-r-[1px] border-gray-700'>
                <p className='text-base 
                font-normal md:text-xl mt-3 md:mt-5 ml-2 md:ml-10 text-white'
                style={{ fontFamily: "var(--font-raleway)" }}
                >{item.title}</p>
              </div>
      <div className='w-[25%] h-full border-r-[1px] border-gray-700 flex items-center justify-center'>
        <Image className='border-transparent' src={"/check_bold.svg"} alt='check_bold' width={30} height={30}/>
      </div>
      <div className='w-[25%] h-full flex items-center justify-center'>
        <Image src={"/close_small.svg"} alt='' width={40} height={40}/>

      </div>
            </div>
          )
        })
      }

      </div>
  )
}

export default AboutTable