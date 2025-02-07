import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  return (
    <>
      <h1>{`The id of the current product is ${params.id} `}</h1>
      {/* we will send the id from routes as /product/:id this is the id  */}
    </>
  );
};

export default ProductDetails;
