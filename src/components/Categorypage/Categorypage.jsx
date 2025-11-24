import React from 'react'
import Productlist from '../ProductList/Productlist.js'
import Banner from '../Banner/Banner.jsx'
import Cards from '../Cards/Cards.jsx'
import { TbFilterPlus } from 'react-icons/tb'
const categorypage = ({title, bgImage, categories=[]}) => {
    let filteredItems = categories.includes("All") ? Productlist 
    : Productlist.filter(items => categories.includes(items.category));
  const renderproduct = filteredItems.map(product=>{
        return(
            <Cards image={product.image} name={product.name} price={product.price}  />
        )
    })
  return (
    <div >
      <Banner title={title} bgImage={bgImage}/>
      <div className='grid gri-d-cols-1 md:grid-cols-4 gap-9 py-20 max-w-[1400px] mx-auto px-10'>
        {renderproduct}
      </div>
    </div>

  )
}

export default categorypage
