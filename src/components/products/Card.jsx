import white1 from "../../assets/img/white1.png";
import React from "react";

const ProductsCard = () => {
  return (
    <>
      <div className="border shadow my-4 py-6 px-6  rounded-xl w-max relative">
        {/* ProductsCard */}
        <span  className="text-xs bg-red-500 rounded-xl my-2 px-1 py-1 absolute top-0 right-4">Clothing</span>
        <img src={white1} alt="" className="h-80  w-auto" />
        <h2 className="mt-3 pb-2 text-xl font-semibold">
          Classic Varsity Jacket
        </h2>
        <p>
          <span className="font-bold text-xl pe-1">$400</span>
          <span className=" line-through ">$700</span>
        </p>
        <button className="w-100% bg-red-700 px-2 py-1 text-white rounded hover:bg-red-800 mt-3">
          Buy Now
        </button>
      </div>
    </>
  );
};

export default ProductsCard;
