import React from 'react'
import Heading from '../Heading/Heading.jsx'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from 'react-icons/fa'
import Basket from '../../assets/basket-full-vegetables.png'
const Values = () => {
  const Leftvalues = valuesData.slice(0,2).map((item) =>{ 
    return (
      <div key={item.id} className='flex-row flex md:flex-row-reverse items-center gap-7'> {/* ⬅️ added items-center and gap */}
        <div>
           <span className='flex justify-center items-center text-3xl text-white 
          bg-gradient-to-b from-orange-400 to-orange-500 rounded-full w-12 h-12'> {/* ⬅️ fixed gradient & added rounded/w/h */}
            {item.icon}
          </span>
          </div>
          <div className='text-right'>
            <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
            <p className='text-zinc-600'>{item.description}</p>
        </div>
      </div>
    )
  })


   const Rightvalues = valuesData.slice(2).map((item) =>{
    return (
      <div key={item.id} className='flex items-center gap-7'> {/* ⬅️ added items-center and gap */}
        <div>
          <span className='flex justify-center items-center text-3xl text-white 
          bg-gradient-to-b from-orange-400 to-orange-500 rounded-full w-12 h-12'> {/* ⬅️ fixed gradient & added rounded/w/h */}
            {item.icon}
          </span>
          </div>
          <div>
            <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
            <p className='text-zinc-600'>{item.description}</p>
        </div>
      </div>
    )
  })
  return (
    <section>
        <div className='max-w-[1400px] mx-auto px-10 py-20'>
         <Heading highlight="Our " heading="Values"/>
        
        <div className='flex md:flex-row flex-col gap-5  mt-15'>
          {/* left values */}
            <div className=" flex flex-col gap-10  justify-between">
       {Leftvalues}
            </div>
            <div className="md:flex w-1/2 hidden justify-between">
              <img src={Basket}/>
              </div>
              {/* right values */}
              <div className='flex flex-col justify-between gap-10'>
                {Rightvalues}
              </div>
            </div>
        </div>
    </section>
  )
};

export default Values

const valuesData = [
    {
        id: 1,
        title: "Trust",
        description: "We prioritize building trust with our customers through transparency, reliability, and consistent quality in our products and services.",
        icon: <FaHeart />
    },
      {
        id: 2,
        title: "Always Fresh",
        description: "We are committed to providing our customers with the freshest produce and groceries, sourced daily from trusted suppliers to ensure optimal quality and taste.",
        icon: <FaLeaf />
    },
         {
        id: 3,
        title: "Food Safety",
        description: "We adhere to the highest standards of food safety and hygiene, ensuring that all our products are handled, stored, and delivered in compliance with industry regulations to protect the health and well-being of our customers.",
        icon: <FaShieldAlt />
    },
       {
        id: 4,
        title: "100% Organic",
        description: "We are dedicated to offering a wide range of 100% organic products, sourced from certified organic farms and producers, to promote healthier lifestyles and support sustainable agricultural practices.",
        icon: <FaSeedling />
    },

];