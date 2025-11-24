import React from 'react'
import Heading from '../Heading/Heading'
import Productlist from '../ProductList/Productlist'
import Cards from '../Cards/Cards'
import { Link } from 'react-router-dom'
import card from '../Category/Category'

const Products = () => {
  const categories = ["All","Fruits", "Vegetables", "Dairy","Sea Foods"]
  const [activeTab, setActiveTab] = React.useState("All");

   const renderCards = Productlist.filter(product => activeTab === "All" || product.category === activeTab)
   .slice(0,8).map((product) => {
    return(
          <Cards image={product.image} name={product.name} price={product.price}/>
    )
   });
  return (
    <section>
    <div className='max-w-[1400px] mx-auto px-10 py-20'>
        <Heading highlight="Our " heading="Products"/>
      {/* {Tabs} */}
      <div className='flex flex-wrap gap-5 justify-center mt-10                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      '>
        {categories.map(category => {
          return(
            <button key={category} 
            className={`px-5 py-2 text-lg rounded-lg cursor-pointer
            ${activeTab === category ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white' : 'bg-zinc-100'}`}
            onClick={() => setActiveTab(category)}>
              {category}
            </button>
          )
        })}
      </div>
      {/* product listing */}
      <div className='grid md:grid-cols-4 grid-cols-1 gap-10 mt-20'>
        {renderCards}
      </div>
      <div className='mt-12 flex justify-center'>
        <Link to="/Allproducts" className='bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-full md:text-lg text-md font-semibold hover:scale-105 duration-300 cursor-pointer'>
              View All
               </Link>
      </div>
    </div>
</section>
  )
}

export default Products
