import React from "react";
import Title from "../components/Title";
import ProductsCard from "../components/products/card";

const List = () => {
  return (
    <>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Title label="NEW Arrivals" />
          <ProductsCard />
        </div>
      </section>
    </>
  );
};

export default List;
