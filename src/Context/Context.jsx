
// import React, { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const [wishlist, setWishlist] = useState([]);

//   // 🛒 Add item to cart
//   const addToCart = (item) => {
//     setCart((prev) => [...prev, item]);
//   };

//   // 💔 Add to wishlist
//   const addToWishlist = (item) => {
//     setWishlist((prev) => [...prev, item]);
//   };

//   // 🧹 Clear entire cart
//   const clearCart = () => {
//     setCart([]);
//   };

//   // 🧹 Clear wishlist
//   const clearWishlist = () => {
//     setWishlist([]);
//   };

//   // 💰 Calculate total
//   const getTotal = () => {
//     return cart.reduce((total, item) => total + Number(item.price), 0);
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         wishlist,
//         addToCart,
//         addToWishlist,
//         clearCart,
//         clearWishlist,
//         getTotal
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
// // Usage: const { cart, addToCart, clearCart, getTotal } = useCart();

// import React, { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const [wishlist, setWishlist] = useState([]);

//   // 🛒 Add item to cart (avoid duplicates)
//   const addToCart = (item) => {
//     setCart((prev) => {
//       if (prev.some((cartItem) => cartItem.id === item.id)) return prev;
//       return [...prev, item];
//     });
//   };

//   // 🗑️ Remove item from cart
//   const removeFromCart = (id) => {
//     setCart((prev) => prev.filter((item) => item.id !== id));
//   };

//   // 💔 Add/Remove from wishlist (toggle)
//   const toggleWishlist = (item) => {
//     setWishlist((prev) => {
//       const exists = prev.some((wishItem) => wishItem.id === item.id);
//       if (exists) {
//         // Remove if already in wishlist
//         return prev.filter((wishItem) => wishItem.id !== item.id);
//       } else {
//         // Add if not in wishlist
//         return [...prev, item];
//       }
//     });
//   };

//   // 🧹 Clear entire cart
//   const clearCart = () => {
//     setCart([]);
//   };

//   // 🧹 Clear wishlist
//   const clearWishlist = () => {
//     setWishlist([]);
//   };

//   // 💰 Calculate total
//   const getTotal = () => {
//     return cart.reduce((total, item) => total + Number(item.price), 0);
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         wishlist,
//         addToCart,
//         removeFromCart,
//         toggleWishlist,
//         clearCart,
//         clearWishlist,
//         getTotal,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // 🛒 Add item to cart (increase quantity if already there)
  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((cartItem) => cartItem.id === item.id);

      if (existing) {
        // already in cart → increase quantity
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
            : cartItem
        );
      }

      // first time → quantity = 1
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // ➕ Increase quantity from cart page
  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    );
  };

  // ➖ Decrease quantity from cart page
  const decreaseQuantity = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: (item.quantity || 1) - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) // remove if 0
    );
  };

  // 🗑️ Remove item from cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // 💔 Add/Remove from wishlist (toggle)
  const toggleWishlist = (item) => {
    setWishlist((prev) => {
      const exists = prev.some((wishItem) => wishItem.id === item.id);
      if (exists) {
        return prev.filter((wishItem) => wishItem.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  // 🧹 Clear entire cart
  const clearCart = () => setCart([]);

  // 🧹 Clear wishlist
  const clearWishlist = () => setWishlist([]);

  // 💰 Calculate total (price * quantity)
  const getTotal = () => {
    return cart.reduce(
      (total, item) => total + Number(item.price) * (item.quantity || 1),
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        toggleWishlist,
        clearCart,
        clearWishlist,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
