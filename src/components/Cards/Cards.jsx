// // import React from 'react'
// // import { FaHeart, FaPlus } from "react-icons/fa";   // ✅ Added imports
// // import Button from '../Button/Button'; 
// // const Cards = ({image,name,price}) => {
// //   return (
// //     <div className=' bg-zinc-100 border p-5 rounded-xl'>
// //         {/* card icons */}
// //       <div className='flex justify-between text-xl mb-3'>
// //         <span className='text-3xl text-zinc-300'>
// //             <FaHeart />
// //         </span>
// //         <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white text-xl px-3 py-3 rounded-lg'>
// //             <FaPlus />
// //         </button>
// //       </div>
// //       {/* Cards img */}
// //         <div className='w-full h-50 '>
// //             <img src={image} className='w-full h-full object-contain'  /> 
// //         </div>

// //         <div className='text-center mt-5'>
// //             <h3 className='text-2xl font-semi-bold'>{name}</h3>
// //             <p className='text-2xl font-bold mt-4 mb-3'>₹{price}</p>
// //             <Button content="Shop Now"/>
// //         </div>
// //     </div>
// //   )
// // }

// // export default Cards


// import React from 'react'
// import { FaHeart, FaPlus } from "react-icons/fa"
// import Button from '../Button/Button'
// import { useCart } from '../../Context/Context.jsx'

// const Cards = ({ image, name, price }) => {
//   const { addToCart, addToWishlist } = useCart();

//   return (
//     <div className='bg-zinc-100 border p-5 rounded-xl'>
//       <div className='flex justify-between text-xl mb-3'>
//         {/* ❤️ Wishlist */}
//         <button 
//           onClick={() => addToWishlist({ image, name, price })}
//           className='text-3xl text-zinc-400 hover:text-red-500 transition'
//         >
//           <FaHeart />
//         </button>

//         {/* ➕ Add to Cart */}
//         <button
//           onClick={() => addToCart({ image, name, price })}
//           className='bg-gradient-to-b from-orange-400 to-orange-500 text-white text-xl px-3 py-3 rounded-lg hover:scale-110 transition-transform'
//         >
//           <FaPlus />
//         </button>
//       </div>

//       <div className='w-full h-50'>
//         <img src={image} className='w-full h-full object-contain' />
//       </div>

//       <div className='text-center mt-5'>
//         <h3 className='text-2xl font-semibold'>{name}</h3>
//         <p className='text-2xl font-bold mt-4 mb-3'>₹{price}</p>
//         <Button content="Shop Now" />
//       </div>
//     </div>
//   );
// }

// export default Cards;

import React, { useState, useEffect } from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import Button from "../Button/Button";
import { useCart } from "../../Context/Context.jsx";

const Cards = ({ image, name, price }) => {
  const { addToCart, addToWishlist, removeFromWishlist, wishlist } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);

  // ✅ Check if the product is already in wishlist
  useEffect(() => {
    const isInWishlist = wishlist.some((item) => item.name === name);
    setIsWishlisted(isInWishlist);
  }, [wishlist, name]);

  // ❤️ Toggle wishlist on click
  const handleWishlistToggle = () => {
    if (isWishlisted) {
      removeFromWishlist(name);
    } else {
      addToWishlist({ image, name, price });
    }
    setIsWishlisted(!isWishlisted);
  };

  // 🛒 Add item to cart
  const handleAddToCart = () => {
    addToCart({ image, name, price });
  };

  return (
    <div className="bg-zinc-100 border p-5 rounded-xl hover:shadow-md transition-all duration-300">
      {/* Top icons */}
      <div className="flex justify-between text-xl mb-3">
        {/* ❤️ Wishlist */}
        <button
          onClick={handleWishlistToggle}
          className={`text-3xl transition ${
            isWishlisted ? "text-red-500" : "text-zinc-400"
          } hover:scale-110`}
          title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
        >
          <FaHeart />
        </button>

        {/* ➕ Add to Cart */}
        <button
          onClick={handleAddToCart}
          className="bg-gradient-to-b from-orange-400 to-orange-500 text-white text-xl px-3 py-3 rounded-lg hover:scale-110 transition-transform"
          title="Add to Cart"
        >
          <FaPlus />
        </button>
      </div>

      {/* Image */}
      <div className="w-full h-50">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="text-center mt-5">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p className="text-2xl font-bold mt-4 mb-3">₹{price}</p>
        <Button content="Shop Now" />
      </div>
    </div>
  );
};

export default Cards;
