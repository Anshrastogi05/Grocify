import React from "react";
import { useCart } from "../../Context/Context";
import { FaTrashAlt, FaShoppingBag } from "react-icons/fa";

const WishListModal = () => {
  const { wishlist, addToCart, removeFromWishlist, clearWishlist } = useCart();

  return (
    <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-5 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">💖 Your Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="text-gray-500 text-center mt-10">No items in wishlist</p>
      ) : (
        <>
          {wishlist.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 mb-4 border-b pb-2"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-contain"
              />
              <div className="flex-1">
                <p className="font-semibold">{item.name}</p>
                <p>₹{item.price}</p>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <button
                  onClick={() => addToCart(item)}
                  className="text-green-600 hover:text-green-800"
                  title="Add to cart"
                >
                  <FaShoppingBag />
                </button>
                <button
                  onClick={() => removeFromWishlist(index)}
                  className="text-red-500 hover:text-red-700"
                  title="Remove from wishlist"
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          ))}

          {/* Total Wishlist Items */}
          <div className="flex justify-between items-center font-bold text-lg mt-4 border-t pt-3">
            <span>Total Items:</span>
            <span>{wishlist.length}</span>
          </div>

          {/* Clear Wishlist */}
          <button
            onClick={clearWishlist}
            className="w-full mt-5 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
          >
            Clear Wishlist
          </button>
        </>
      )}
    </div>
  );
};

export default WishListModal;
