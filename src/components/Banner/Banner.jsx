import React from 'react'
const Banner = ({title, bgImage}) => {
  return (
    <div className="bg-zinc-400 h-[400px] mt-28 flex justify-center items-center bg-cover bg-center"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  <h2 className="text-5xl text-zinc-800 bg-white p-5 rounded-xl font-semibold">
    {title}
  </h2>
  <div className='bg-black absolute insert-0'></div>
</div>

  )
}

export default Banner
