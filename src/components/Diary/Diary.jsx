import React from 'react'
import Categorypage from '../Categorypage/Categorypage'
import BgDiary from '../../assets/dairy-banner.jpg'
const Diary = () => {
  return (
    <div>
      <Categorypage title="Diary & Eggs" bgImage={BgDiary} categories={['Dairy']}/>
    </div>
  )
}

export default Diary
