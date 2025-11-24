import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home.jsx'
import Fruit from './components/Fruits/Fruit.jsx' // assuming you have this component
import Dairy from './components/Diary/Diary.jsx' // assuming you have this component
import Seafood from './components/SeaFood/Seafood.jsx' // assuming you have this component
import Layout from './components/Layout/Layout.jsx'
import AllProducts from './components/AllProducts/AllProducts.jsx';
import { CartProvider } from './Context/Context'; // Import CartProvider
import CartPage from './components/Cartpage/Cartpage.jsx';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/fruits",
          element: <Fruit />,
        },
        {
          path: "/diary",
          element: <Dairy />
        },
        {
          path: "/seafood",
          element: <Seafood />
        },
        {
          path: "/Allproducts",
          element: <AllProducts />
        },
        
{
  path: "/cart",
  element: <CartPage />,
},
      ]
    },
  ]);

  return (
    <CartProvider>   {/* ✅ Wrap router here */}
      <RouterProvider router={router} />
    </CartProvider>
  );
}
export default App
