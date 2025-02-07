import React from "react";
import Title from "../components/Title";
import ProductsCard from "../components/products/card";
import ProductData from "../data";

const List = () => {
  return (
    <>
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <Title label="NEW Arrivals" />
          <div className=" py-4">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {ProductData.map((ProductData) => (
                <ProductsCard key={ProductData.id} {...ProductData} />
                // same as mapping indiuidually 
                // <ProductsCard key={ProductData.id} name={ProductData.name} price={ProductData.price}/>
              ))}

              {/* <ProductsCard />
              <ProductsCard />
              <ProductsCard />
              <ProductsCard />
              <ProductsCard />
              <ProductsCard /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default List;

// ------ after creation of a rough ui
// can just be replace with variables
// op feature of react
// const List = () => {
//   return (
//     <>
//       <section className="py-12 bg-gray-100">
//         <div className="container mx-auto px-4">
//           <Title label="NEW Arrivals" />
//           <div className=" py-4">
//             <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//               <ProductsCard />
//               <ProductsCard />
//               <ProductsCard />
//               <ProductsCard />
//               <ProductsCard />
//               <ProductsCard />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };
