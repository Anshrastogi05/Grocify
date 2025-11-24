import React from 'react'

import Hero from '../Hero/Hero.jsx'
import Category from '../Category/Category.jsx'
import Values from '../values/values.jsx'
import Products from '../Products/Products.jsx'
import Discount from '../Discount/Discount.jsx'
import Process from '../Process/Process.jsx'
import Testimonial from '../Testimonial/Testimonial.jsx'

const Home = () => {
  return (
    <div>
     
      <Hero />
      <Category/>
      <Values />
      <Products/>
      <Discount/>
      <Process/>
      <Testimonial/>
      
    </div>
  )
}

export default Home
