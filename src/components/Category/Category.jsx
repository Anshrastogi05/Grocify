import React from 'react'
import Heading from '../Heading/Heading'
import Fruitscat from '../../assets/fruits-and-veggies.png'
import Diarycat from '../../assets/dairy-and-eggs.png'
import Seafoodcat from '../../assets/meat-and-seafood.png'
import { Link } from 'react-router-dom' 
const Category = () => {

   const renderCards = category.map(card=>{
    return(
      //card 
      <div className='flex-1 basis-[300px]' key={card.id}>
        {/* card image */}
      <div className='w-full h-[30vh] relative -mb-10'>
        <img src={card.image} className='absolute bottom-0'/>
        </div>
        {/* card content */}
        <div className='bg-zinc-100 pt-17 p-8 rounded-xl'>
        <h3 className='text-zinc-800 text-3xl font-bold '>{card.name}</h3>
        <p className='text-zinc-600  mt-3 mb-8'>{card.description}</p>
       <Link to={card.path} className='bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-full md:text-lg text-md font-semibold hover:scale-105 duration-300 cursor-pointer'>
        See All
        </Link>
        </div>
      </div>
     
    )
   })
  return (
    <section>
    <div className='max-w-[1400px] mx-auto px-10 py-20'>
       <Heading highlight="Shop "heading="by Category"/>
       {/* Category Cards */}
  
    <div className="flex flex-wrap gap-10 md:mt-15 mt-10 justify-center">
      {renderCards}
    </div>
    </div>
    </section>
  )
}

export default Category
 
const category = [
  {
    id:1,
    name:"Fruits & Vegetables",
    description: "Fresh and organic fruits and vegetables sourced directly from local farms.",
    image: Fruitscat,
    path: '/fruits',
  },
  {
    id:2,
    name:"Dairy & Eggs",
    description: "Diary products and eggs that are fresh, high-quality, and ethically sourced.",
    image: Diarycat,
    path: '/diary',
  },
  {
    id:3,
    name:"Meat & Seafood",
    description: "Meat and seafood products that are fresh, high-quality, and responsibly sourced.",
    image: Seafoodcat,
    path: '/seafood',
  },
]