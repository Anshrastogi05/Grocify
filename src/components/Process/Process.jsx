import React from 'react'
import Heading from '../Heading/Heading'  
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled } from "react-icons/tb";
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { LuTruck } from "react-icons/lu";
const Process = () => {
    const renderSteps = steps.map(items=> {
        return(
            <div className={`flex-1 basis-[300px] ${items.id % 2 === 0 ? 'md:-mt-100' : ''}`} key={items.id}>
                <span className='flex rounded-full justify-center items-center mx-auto w-18 h-18 text-8xl text-white bg-zinc-800 outline-[3px] outline-offset-7 outline-zinc-800 outline-dotted'>{items.number}</span>
                <div className='flex items-center mt-6 gap-x-5'>
                       <span className='flex justify-center items-center text-3xl bg-gradient-to-b from-orange-400 to-orange-500 text-white w-15 h-15 rounded-full'>{items.icon}</span>
                      
                    <div className='flex-1'>
                        <h4 className='text-zinc-800 text-2xl font-bold'>{items.title}</h4>
                        <p className='text-zinc-600 mt-2'>{items.para}</p>
                    </div>
                </div>
            </div>
        )
    })
  return (
    <section>
      <div className='max-w-[1400px] mx-auto px-10 py-20'>
        <div className='w-fit mr-auto'>
        <Heading highlight="Our " heading="Process" />
      </div>
      <div className='flex flex-wrap gap-y-17 justify-center items-center md:mt-20 mt-10 pt-10 md:pt-50'>
        {renderSteps}
      </div>
      </div>
    </section>
  )
}

export default Process

const steps = [
    {
        id: 1,
        number:<TbCircleNumber1Filled />,
        title: "Sourcing",
        para: "We partner with local farmers and trusted suppliers to source the highest-quality organic produce.",
        icon: <PiPlant />,
    },
       {
        id: 2,
        number:<TbCircleNumber2Filled />,
        title: "Manufacturing",
        para: "Our state-of-the-art facilities ensure that all products are handled with care, maintaining their freshness and nutritional value.",
        icon: <PiFactory/>,
    },
       {
        id: 3,
        number:<TbCircleNumber3Filled />,
        title: "Quality Control",
        para: "Each item undergoes rigorous quality checks to ensure freshness and adherence to organic standards.",
        icon: <SlBadge/>,
    },
       {
        id: 4,
        number:<TbCircleNumber4Filled />,
        title: "Logistics",
        para: "We utilize efficient logistics and delivery systems to ensure your order arrives promptly and in perfect condition.",
        icon: <LuTruck/>,
    },
]