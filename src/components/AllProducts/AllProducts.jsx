import React from "react";
import Categorypage from "../Categorypage/Categorypage";
import BgAll from "../../assets/all-banner.jpg";

const AllProducts = () => {
  return (
    <div>
      <Categorypage title="All Products" bgImage={BgAll} />
    </div>
  );
};

export default AllProducts;
