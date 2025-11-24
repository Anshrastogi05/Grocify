import React from 'react'
import Categorypage from '../Categorypage/Categorypage'
import BgFruits from '../../assets/fruits-banner.jpg'
const fruits = () => {
  return (
    <div>
   <Categorypage title="Fruits & Veggies" bgImage={BgFruits} categories={['Fruits','Vegetables']}/>
    </div>
  )
}

export default fruits
