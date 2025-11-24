import React from 'react'
import Grocery from '../../assets/grocery.png'
import Button from '../Button/Button.jsx'
const Hero = () => {
  return (
    <section>
    <div className='max-w-[1400px] mx-auto px-10 flex md:flex-row flex-col items-center md:pt-15 pt-15'>
      {/* Hero content */}
      <div className='flex-1'>
       <div className="mt-10">
            <span className="inline-block bg-orange-200 text-orange-500 text-lg px-5 py-2 rounded-full">
              Export Best Quality...
            </span>
          </div>
<h1 className='md:text-7xl/20 text-5xl/14 font-bold mt-4'>
  Tasty Organic <span className='text-orange-500'>Fruits</span> & <br></br><span className='text-orange-500'>Veggies</span><br></br> In Your City
</h1>
<p className='text-zinc-600 md:text-lg texr-md my-5 max-w-[600px]'>
  We deliver organic vegetables & fruits fresh from the farm to your doorstep.
</p>
  <Button content="Shop Now"/>
</div>

      {/* Hero image */}
      <div className='flex-1'>
        <img src={Grocery} 
        alt="Hero Image" className="w-full max-w-[500px] h-auto object-contain" />
    </div>
    </div>
    </section>
  )
}

export default Hero
