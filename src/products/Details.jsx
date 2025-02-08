import React from "react";
import white1 from "../../src/assets/img/white1.png";
import ProductData from "../data";
import { FaCartPlus, FaStar, FaStarHalf } from "react-icons/fa";

import { useParams } from "react-router-dom";
import Title from "../components/Title";

const ProductDetails = () => {
  const params = useParams();
  return (
    <>
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 ">
          <div className="flex  gap-4 flex-col lg:flex-row   justify-around items-center ">
            <img src={white1} className="" alt="" />
            <div className="w-1/2">
            <div className="flex mt-2 text-orange-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </div>
              <p className="pt-2">
                <Title label="Jeans Jacket" />
              </p>
              <p className="text-justify py-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure,
                pariatur tempore! Quidem totam officiis natus autem pariatur
                voluptates veritatis, illum aliquid! Quam ea reiciendis
                consequuntur laudantium qui ipsa odio fuga expedita, blanditiis
                corporis veniam velit, voluptatum labore, maiores ipsum non ex
                beatae incidunt explicabo! Quasi, earum. Ipsum, amet eveniet!
                Molestiae?
              </p>
              <p>
                <h1 className="font-bold text-xl mb-2">LEVIS</h1>
                <span className=" text-2xl mt-2 pe-1">$100</span>
                {/* just pay 80% , 20% discount  */}
                <span className=" line-through text-slate-500 text-sm ">
                  $200
                </span>
              </p>
            
              <button />
              <button className=" bg-teal-700 px-2 py-1 gap-2 text-white rounded hover:bg-green-900  flex items-center ">
                Add to cart
                <FaCartPlus />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
