import React from "react";
import { IoIosArrowForward } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="bg-zinc-100 py-20">
      <div className="flex flex-wrap max-w-[1400px] mx-auto px-10 ">
        <div className="flex-1 basis-[300px] min-w-[250px] mb-10">
          <a href="#" className="text-3xl font-bold">
            {/*logo*/}
            Gr<span className="text-orange-500 uppercase">o</span>cify
          </a>
          <p className="text-zinc-600 mt-6 max-w-[400px]">
            Your one-stop shop for fresh, organic groceries delivered straight
            to your door.
          </p>
          <p className="text-zinc-800 mt-4">
            &copy; 2025 Grocify. All rights reserved.
          </p>
        </div>
        <ul className="flex-1 min-w-[150px] mb-10">
          <li>
            <h5 className="text-zinc-700 text-2xl font-bold mb-4">Company</h5>
          </li>
          <li className="mt-6">
            <a href="#" className="hover:text-orange-500  text-zinc-800">
              About
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="hover:text-orange-500 text-zinc-800">
              FAQ'S
            </a>
          </li>
        </ul>
        <ul className="flex-1 min-w-[150px] mb-10">
          <li>
            <h5 className="text-zinc-700 font-bold text-2xl mb-4">Support</h5>
          </li>
          <li className="mt-6">
            <a href="#" className="hover:text-orange-500 text-zinc-800">
              Support Center
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="hover:text-orange-500 text-zinc-800">
              Feedback
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="hover:text-orange-500 text-zinc-800">
              Contact Us
            </a>
          </li>
        </ul>
        <div className="flex-1">
          <h5 className="text-zinc-700 font-bold text-2xl mb-4">Stay Connected</h5>
          <p className="text-zinc-600">Questions or Feedbacks ?
          <br></br>
            We Love to Hear From You!
          </p>
      <div className="flex bg-white p-1 rounded-lg mt-6">
  <input
    type="email"
    name="email"
    id="email"
    autoComplete="off"
    placeholder="Enter your email"
    className="h-[5vh] p-4 flex-1 focus:outline-none rounded-md sm:rounded-l-md sm:rounded-r-none"
  />
  <button
    className="bg-gradient-to-b from-orange-400 to-orange-500 text-white p-2 rounded-md text-2xl hover:from-orange-500 hover:to-orange-600 transition-all cursor-pointer sm:rounded-r-md sm:rounded-l-none flex items-center justify-center"
  >
    <IoIosArrowForward />
  </button>
</div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
