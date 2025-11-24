import React, { useState, useEffect } from 'react';
import { FaHeart, FaShoppingBag } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbMenu3 } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { useCart } from '../Context/Context';
// import CartModal from '../Components/CartModal';
import CartModal from './CartModal/CartModal.jsx';
import WishlistModal from './WishlistModal/WishListModal.jsx';

function Navbar() {
  const [showMenu, setShowmenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);

  const { cart, wishlist } = useCart();

  const toggleMenu = () => setShowmenu(!showMenu);
  const toggleCart = () => setShowCart(!showCart);
  const toggleWishlist = () => setShowWishlist(!showWishlist);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-white fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'shadow-lg' : ''}`}>
      <nav className='flex max-w-[1400px] mx-auto px-10 h-[14vh] justify-between items-center'>
        <Link to="/" className='text-3xl font-bold'>
          Gr<span className='text-orange-500 uppercase'>o</span>cify
        </Link>

        {/* Desktop Menu */}
        <ul className='md:flex items-center gap-x-12 font-semibold text-lg hidden'>
          <li><a href="#" className='text-orange-500'>Home</a></li>
          <li><a href="#" className='hover:text-orange-500'>About Us</a></li>
          <li><a href="#" className='hover:text-orange-500'>Process</a></li>
          <li><a href="#" className='hover:text-orange-500'>Contact Us</a></li>
        </ul>

        {/* Actions */}
        <div className='flex items-center gap-5'>
          {/* Search bar (Desktop) */}
          <div className='md:flex p-1 border-2 border-orange-300 rounded-full hidden'>
            <input
              type="text"
              placeholder='Search items...'
              className='flex-1 h-[5vh] px-3 focus:outline-none'
            />
            <button className='bg-orange-400 text-white text-xl p-2 rounded-full hover:scale-105 duration-300'>
              <IoSearch />
            </button>
          </div>

          {/* Wishlist Icon */}
          <button onClick={toggleWishlist} className='text-zinc-800 text-2xl relative'>
            <FaHeart />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Cart Icon */}
          <button onClick={toggleCart} className='text-zinc-800 text-2xl relative'>
            <FaShoppingBag />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>

          {/* Hamburger for Mobile */}
          <button className='text-zinc-800 text-3xl md:hidden' onClick={toggleMenu}>
            {showMenu ? <TbMenu3 /> : <GiHamburgerMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <div className="fixed inset-0 z-50 flex items-center justify-center md:hidden" onClick={toggleMenu}>
            <ul className='flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-col gap-y-10 py-15 px-12 bg-orange-500/20 backdrop-blur-xl shadow-xl rounded-xl text-lg text-white transition-all duration-500'>
              <li><a href="#" className='text-orange-500'>Home</a></li>
              <li><a href="#" className='hover:text-orange-500'>About Us</a></li>
              <li><a href="#" className='hover:text-orange-500'>Process</a></li>
              <li><a href="#" className='hover:text-orange-500'>Contact Us</a></li>
              <li className='flex p-1 border-2 border-orange-300 rounded-full'>
                <input type="text" placeholder='Search items...' className='flex-1 h-[5vh] px-3 focus:outline-none text-black' />
                <button className='bg-orange-400 text-white text-xl p-2 rounded-full hover:scale-105 duration-300'>
                  <IoSearch />
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black/40 flex justify-end z-50" onClick={toggleCart}>
          <div onClick={(e) => e.stopPropagation()}>
            <CartModal />
          </div>
        </div>
      )}

      {/* Wishlist Modal */}
      {showWishlist && (
        <div className="fixed inset-0 bg-black/40 flex justify-end z-50" onClick={toggleWishlist}>
          <div onClick={(e) => e.stopPropagation()}>
            <WishlistModal />
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;



// import React, { useState, useEffect } from 'react';
// import { FaHeart, FaShoppingBag } from "react-icons/fa";
// import { IoSearch } from "react-icons/io5";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { TbMenu3 } from "react-icons/tb";
// import { Link } from 'react-router-dom';
// import { useCart } from '../Context/Context';

// function Navbar() {
//   const [showMenu, setShowmenu] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [showCart, setShowCart] = useState(false);
//   const [showWishlist, setShowWishlist] = useState(false);

//   const { cart, wishlist, clearCart, clearWishlist, getTotal } = useCart();

//   const toggleMenu = () => setShowmenu(!showMenu);
//   const toggleCart = () => setShowCart(!showCart);
//   const toggleWishlist = () => setShowWishlist(!showWishlist);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header className={`bg-white fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'shadow-lg' : ''}`}>
//       <nav className='flex max-w-[1400px] mx-auto px-10 h-[14vh] justify-between items-center'>
        
//         {/* Logo */}
//         <Link to="/" className='text-3xl font-bold'>
//           Gr<span className='text-orange-500 uppercase'>o</span>cify
//         </Link>

//         {/* Desktop Menu */}
//         <ul className='md:flex items-center gap-x-12 font-semibold text-lg hidden'>
//           <li><a href="#" className='text-orange-500'>Home</a></li>
//           <li><a href="#">About Us</a></li>
//           <li><a href="#">Process</a></li>
//           <li><a href="#">Contact Us</a></li>
//         </ul>

//         {/* Actions */}
//         <div className='flex items-center gap-5'>

//           {/* Search */}
//           <div className='md:flex p-1 border-2 border-orange-300 rounded-full hidden'>
//             <input 
//               type="text" 
//               placeholder='Search items...' 
//               className='flex-1 h-[5vh] px-3 focus:outline-none' 
//             />
//             <button className='bg-orange-400 text-white text-xl p-2 rounded-full hover:scale-105 duration-300'>
//               <IoSearch />
//             </button>
//           </div>

//           {/* Wishlist */}
//           <button onClick={toggleWishlist} className='text-zinc-800 text-2xl relative'>
//             <FaHeart />
//             <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//               {wishlist.length}
//             </span>
//           </button>

//           {/* Cart */}
//           <button onClick={toggleCart} className='text-zinc-800 text-2xl relative'>
//             <FaShoppingBag />
//             <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//               {cart.length}
//             </span>
//           </button>

//           {/* Hamburger */}
//           <button className='text-zinc-800 text-3xl md:hidden' onClick={toggleMenu}>
//             {showMenu ? <TbMenu3 /> : <GiHamburgerMenu />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {showMenu && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center md:hidden bg-black/40" onClick={toggleMenu}>
//             <ul className='flex flex-col gap-y-10 py-10 px-12 bg-white shadow-xl rounded-xl text-lg text-zinc-800'>
//               <li><a href="#" className='text-orange-500'>Home</a></li>
//               <li><a href="#">About Us</a></li>
//               <li><a href="#">Process</a></li>
//               <li><a href="#">Contact Us</a></li>
//             </ul>
//           </div>
//         )}

//         {/* 🛒 Cart Modal */}
//         {showCart && (
//           <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
//             <div className="bg-white p-6 rounded-xl shadow-lg w-[90%] md:w-[500px] relative">
//               <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

//               {cart.length === 0 ? (
//                 <p className="text-gray-600 text-center py-10">Your cart is empty 🛍️</p>
//               ) : (
//                 <>
//                   <ul className="space-y-3 max-h-[300px] overflow-y-auto">
//                     {cart.map((item, index) => (
//                       <li key={index} className="flex justify-between items-center border-b pb-2">
//                         <span>{item.name}</span>
//                         <span className="text-orange-500 font-semibold">₹{item.price}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   <div className="flex justify-between items-center mt-5">
//                     <p className="text-lg font-semibold">Total: <span className="text-orange-500">₹{getTotal()}</span></p>
//                     <button onClick={clearCart} className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition">Clear Cart</button>
//                   </div>
//                 </>
//               )}

//               <button 
//                 onClick={toggleCart}
//                 className="absolute top-3 right-3 text-xl text-gray-500 hover:text-orange-500"
//               >
//                 ✕
//               </button>
//             </div>
//           </div>
//         )}

//         {/* ❤️ Wishlist Modal */}
//         {showWishlist && (
//           <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
//             <div className="bg-white p-6 rounded-xl shadow-lg w-[90%] md:w-[500px] relative">
//               <h2 className="text-2xl font-bold mb-4">Your Wishlist ❤️</h2>

//               {wishlist.length === 0 ? (
//                 <p className="text-gray-600 text-center py-10">Your wishlist is empty 💖</p>
//               ) : (
//                 <>
//                   <ul className="space-y-3 max-h-[300px] overflow-y-auto">
//                     {wishlist.map((item, index) => (
//                       <li key={index} className="flex justify-between items-center border-b pb-2">
//                         <span>{item.name}</span>
//                         <span className="text-orange-500 font-semibold">₹{item.price}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   <div className="flex justify-end mt-5">
//                     <button onClick={clearWishlist} className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition">Clear Wishlist</button>
//                   </div>
//                 </>
//               )}

//               <button 
//                 onClick={toggleWishlist}
//                 className="absolute top-3 right-3 text-xl text-gray-500 hover:text-orange-500"
//               >
//                 ✕
//               </button>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }

// export default Navbar;
