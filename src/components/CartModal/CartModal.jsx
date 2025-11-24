import React from "react";
import { useCart } from "../../Context/Context.jsx";
import { FaTrash } from "react-icons/fa";

const CartModal = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, clearCart } = useCart();

  if (!isOpen) return null; // hide when closed

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-end z-50"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-sm h-full p-5 overflow-y-auto shadow-xl transform translate-x-0 transition-transform duration-300"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold text-orange-600">Your Cart 🛒</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-orange-500 text-xl font-bold"
          >
            ✕
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500 mt-20 text-lg">
            Your cart is empty.
          </p>
        ) : (
          <>
            <ul className="space-y-4">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b pb-3"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-contain"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-gray-700">${item.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.name)}
                    className="text-red-500 text-xl hover:scale-110 transition-transform"
                  >
                    <FaTrash />
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6 text-right">
              <button
                onClick={clearCart}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
