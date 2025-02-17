import React from "react";
import Title from "../components/Title";
import ProductsCard from "../components/products/Card";
import ProductData from "../data";

const List = () => {
  return (
    <>
      <section className="py-12 bg-gray-100 relative">
        <div className="container mx-auto px-4 ">
          <Title label="NEW ARRIVALS" />

          <div className=" py-4">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {ProductData.map((ProductData) => (
                <ProductsCard
                  key={ProductData.id}
                  id={ProductData.id}
                  {...ProductData}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default List;
