// import React from 'react'
// import Heading from '../Heading/Heading'
// import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'
// import customer1 from '../../assets/customer1.jpg'
// import customer2 from '../../assets/customer2.jpg'
// import customer3 from '../../assets/customer3.jpg'
// import customer4 from '../../assets/customer4.jpg'
// import customer5 from '../../assets/customer5.jpg'


// const Testimonial = () => {
//   return (
//     <section>
//     <div className='max-w-[1400px] mx-auto px-10 py-20'>
//       <Heading highlight="Customers " heading="Saying"/>
//       <div className='flex justify-end py-5 gap-x-3'>
//         <button className='text-2xl rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer'>   
//           <IoIosArrowForward/>
//         </button>
//         <button className='text-2xl rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer'> 
//           <IoIosArrowBack/>
//         </button>
//       </div>
//       <div className='bg-zinc-100 rounded-xl p-8'>
//         <div className='flex gap-5 items-center'>
//           <div className='w-16 h-16 rounded-full bg-red-500 outline-2 outline-orange-400 outline flex justify-center items-center text-white text-3xl font-bold'>
           
//            <div>
//             <h5 className='text-xl font-bold'>Name</h5>
//             <p className='text-zinc-600'>Profession</p>
//             <span>Stars</span>
//         </div>
//         </div>
//         <div className='mt-10'>
//           <p className='text-zinc-600'>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//           </p>
//         </div>
      
      
//       </div>
//     </div>
//     </div>

//     </section>

//   );
// };

// export default Testimonial;

// const review = [
// {
//    id: 1,
//    name: "John Doe",
//     profession: "Software Engineer",
//     rating: "⭐⭐⭐⭐⭐",
//     review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     image: customer1,
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     profession: "Food devrloper",
//     rating: "⭐⭐⭐⭐",
//     review: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     image: customer2,
//   },
//   {
//     id: 3, 
//     name: "Alice Johnson",
//     profession: "Designer",
//     rating: "⭐⭐⭐⭐⭐",
//     review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
// image: customer3,
//   },
//   {
//     id: 4, 
//     name: "Rahul Singh",
//     profession: "chief",
//     rating: "⭐⭐⭐",
//     review: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
//       image: customer4,
//   },
//   {
//     id: 5, 
//     name: "Anshika Sharma",
//     profession: "Manager",
//     rating: "⭐⭐⭐⭐",
//     review: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
//     image: customer5,
//   },
// ]    
import React from 'react'
import Heading from '../Heading/Heading'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import customer1 from '../../assets/customer1.jpg'
import customer2 from '../../assets/customer2.jpg'
import customer3 from '../../assets/customer3.jpg'
import customer4 from '../../assets/customer4.jpg'
import customer5 from '../../assets/customer5.jpg'

const reviews = [
  {
    id: 1,
    name: "John Doe",
    profession: "Software Engineer",
    rating: "⭐⭐⭐⭐⭐",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: customer1,
  },
  {
    id: 2,
    name: "Jane Smith",
    profession: "Food Developer",
    rating: "⭐⭐⭐⭐",
    review:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: customer2,
  },
  {
    id: 3,
    name: "Alice Johnson",
    profession: "Designer",
    rating: "⭐⭐⭐⭐⭐",
    review:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    image: customer3,
  },
  {
    id: 4,
    name: "Rahul Singh",
    profession: "Chef",
    rating: "⭐⭐⭐",
    review:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    image: customer4,
  },
  {
    id: 5,
    name: "Anshika Sharma",
    profession: "Manager",
    rating: "⭐⭐⭐⭐",
    review:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit.",
    image: customer5,
  },
]

const Testimonial = () => {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Customers " heading="Saying" />

        <div className="relative">
          {/* Swiper Container */}
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            navigation={{
              nextEl: '.testimonial-next',
              prevEl: '.testimonial-prev',
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = '.testimonial-prev'
              swiper.params.navigation.nextEl = '.testimonial-next'
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {reviews.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-zinc-100 rounded-xl p-6 mt-6 mb-8 shadow-xl h-full flex flex-col justify-between min-h-[220px]">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-orange-400"
                    />
                    <div>
                      <h5 className="text-lg font-bold">{item.name}</h5>
                      <p className="text-sm text-zinc-600">{item.profession}</p>
                      <span className="text-yellow-500">{item.rating}</span>
                    </div>
                  </div>
                  <p className="text-zinc-600 text-sm mb-6 leading-relaxed line-clamp-2">
                    {item.review}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons OUTSIDE Swiper */}
          <div className="flex justify-end gap-x-3 mt-6">
            <button className="testimonial-prev text-2xl rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer">
              <IoIosArrowBack />
            </button>
            <button className="testimonial-next text-2xl rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
