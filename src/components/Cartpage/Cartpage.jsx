// import React from "react";
// import { useCart } from "../../Context/Context.jsx";
// import { FaTrash } from "react-icons/fa";

// const CartPage = () => {
//   const { cart, removeFromCart, clearCart } = useCart();

//   if (cart.length === 0) {
//     return <div className="text-center mt-20 text-2xl">🛒 Your cart is empty.</div>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto mt-20 p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-3xl font-bold mb-6 text-center text-orange-600">Your Cart</h2>

//       <ul className="space-y-4">
//         {cart.map((item, index) => (
//           <li key={index} className="flex justify-between items-center border-b pb-3">
//             <div className="flex items-center gap-4">
//               <img src={item.image} alt={item.name} className="w-16 h-16 object-contain" />
//               <div>
//                 <h3 className="text-lg font-semibold">{item.name}</h3>
//                 <p className="text-gray-700">₹{item.price}</p>
//               </div>
//             </div>
//             <button
//               onClick={() => removeFromCart(item.name)}
//               className="text-red-500 text-xl hover:scale-110 transition-transform"
//             >
//               <FaTrash />
//             </button>
//           </li>
//         ))}
//       </ul>

//       <div className="text-right mt-6">
//         <button
//           onClick={clearCart}
//           className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold"
//         >
//           Clear Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartPage;
// // export default CartPage

import React from "react";
import { useCart } from "../../Context/Context.jsx";
import { FaTrash } from "react-icons/fa";

const CartPage = () => {
  const {
    cart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    getTotal,
  } = useCart();

  if (!cart || cart.length === 0) {
    return (
      <div className="text-center mt-20 text-2xl">
        🛒 Your cart is empty.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-20 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center text-orange-600">
        Your Cart
      </h2>

      <ul className="space-y-4">
        {cart.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center border-b pb-3"
          >
            {/* Left: image + name + price */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-700">₹{item.price}</p>
              </div>
            </div>

            {/* Right: quantity controls + item total + delete */}
            <div className="flex items-center gap-6">
              {/* -  qty  + */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="px-2 py-1 border rounded-lg"
                >
                  -
                </button>
                <span className="min-w-[2rem] text-center">
                  {item.quantity || 1}
                </span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="px-2 py-1 border rounded-lg"
                >
                  +
                </button>
              </div>

              {/* Price for this line */}
              <span className="font-semibold">
                ₹{Number(item.price) * (item.quantity || 1)}
              </span>

              {/* Delete button */}
              <button
                onClick={() => removeFromCart(item.id)} // ✅ use id, not name
                className="text-red-500 text-xl hover:scale-110 transition-transform"
              >
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Total + Clear Cart */}
      <div className="flex justify-between items-center mt-6">
        <div className="text-xl font-bold">
          Total: <span className="text-orange-600">₹{getTotal()}</span>
        </div>

        <button
          onClick={clearCart}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartPage;
