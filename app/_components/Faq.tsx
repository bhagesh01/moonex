import Image from 'next/image'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Faq = () => {
  return (
    <div className='min-h-fit py-32 md:mt-16 px-10 md:px-56 relative' id='faq'>
      <Image src={"./Ellipse-gradient.svg"} alt='ellipse gradient' height={600} width={600} className='absolute opacity-50 -left-10 top-72
      md:-left-44
      rounded-full
      md:-top-10
      md:w-[60rem]
      md:opacity-50
      '/>
      <Image src={"./Ellipse-gradient.svg"} alt='ellipse gradient' height={200} width={200} className='hidden md:block absolute opacity-50
      md:right-10
      rounded-full
      md:top-10
      md:w-[30rem]
      md:opacity-50
      '/>
<div className='px-4 md:px-20 py-5 text-white mt-20 -z-10' id='glass-effect'>
<div className='text-center mb-6'>
<span className=' text-4xl font-semibold text-[#E4B40D]'
style={{ fontFamily: "var(--font-raleway)" }}
>
  FAQ</span>
</div>
<Accordion type="single" collapsible className="w-ful font-normal tex-lg">
      <AccordionItem value="item-1" className=' border-gray-700 border-t-[1px]'>
        <AccordionTrigger >How do I get a Referral Code?</AccordionTrigger>
        <AccordionContent className='text-gray-500'>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem >
      <AccordionItem value="item-2" className=' border-gray-700'>
        <AccordionTrigger>Do I get rewarded in tokens or ETH when buyers when i refer buyers?</AccordionTrigger>
        <AccordionContent className='text-gray-500'>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3"className=' border-gray-700' >
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent className='text-gray-500'>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
      <div className='mt-6'></div>
    </Accordion>
</div>

    </div>
  )
}

export default Faq