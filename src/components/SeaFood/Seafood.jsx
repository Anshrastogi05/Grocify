import React from 'react'
import Categorypage from '../Categorypage/Categorypage'
import BgSeaFood from '../../assets/seafood-banner.jpg'
const Seafood = () => {
  return (
    <div>
    <Categorypage title="Meat & Seafood" bgImage={BgSeaFood} categories={['Sea Foods']}/>
    </div>
  )
}

export default Seafood
