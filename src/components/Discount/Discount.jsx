import React from 'react'
import Button from '../Button/Button'
import FreshFruit from '../../assets/fresh-fruits.png'
const Discount = () => {
  return (
    <section 
  className='bg-zinc-100 bg-no-repeat bg-right bg-contain'
  style={{ backgroundImage: `url(${FreshFruit})`}}
>
      <style>
        {`
          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
          .blink {
            animation: blink 2s infinite;
          }
        `}
      </style>
    <div className='md:bg-transparent bg-zinc-100 md:flex-row flex-col max-w-[1400px] mx-auto py-10 px-8 flex gap-8'>
      <span className='md:text-9xl text-6xl text-orange-500 font-bold transform md:-rotate-90 h-fit md:self-center'>20%</span>
      <div className='max-w-[700px]'>
        <h3 className='md:text-7xl text-4xl text-zinc-800 font-bold'>First Order Discount!</h3>
        <p className='text-zinc-600 text-lg my-4 w-3/4'>
            Enjoy an exclusive 20% discount on your first order! Use code 
            <strong className='text-orange-600 blink'> FIRST20</strong> at checkout to save on your initial purchase. 
            Start shopping now and take advantage of this special offer!
        </p>
        <Button content="Get the Discount"/>
      </div>
    </div>
    </section>
  )
}

export default Discount
