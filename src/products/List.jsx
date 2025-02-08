import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import ProductsCard from "../components/products/card";
import ProductData from "../data";
import { getProducts } from "../api/product";
import "@fortawesome/fontawesome-free/css/all.min.css";

const List = () => {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getProducts()
      .then((response) => {
        setProductList(response.data);
        setLoading(false);
      })
      .catch(console.log("sucessful error"));
  }, []);
  if (loading)
    return (
      <div className="flex font-bold justify-center items-center h-screen w-screen">
      <i className="fa-solid fa-spinner fa-spin-pulse text-blue-500 text-6xl"></i>
    </div>
    
    );

  return (
    <>
      <section className="py-12 bg-gray-100">
        <div className="containÏer mx-auto px-4">
          <Title label="NEW Arrivals" />
          <div className=" py-4">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {productList.map((product) => (
                <ProductsCard key={product._id} id={product._id} {...product} />
                // same as mapping indiuidually
                // <ProductsCard key={ProductData.id} name={ProductData.name} price={ProductData.price}/>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default List;

//1
// 2  using local files data

// 1 ---------------------------------    after creation of a rough ui
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

///// 2 ---------------------------------     using data from the locally created js file
// import React from "react";
// import Title from "../components/Title";
// import ProductsCard from "../components/products/card";
// import ProductData from "../data";

// const List = () => {
//   return (
//     <>
//       <section className="py-12 bg-gray-100">
//         <div className="container mx-auto px-4">
//           <Title label="NEW Arrivals" />
//           <div className=" py-4">
//             <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//               {ProductData.map((ProductData) => (
//                 <ProductsCard key={ProductData.id} {...ProductData} />
//                 // same as mapping indiuidually
//                 // <ProductsCard key={ProductData.id} name={ProductData.name} price={ProductData.price}/>
//               ))}

//               {/* <ProductsCard />
//               <ProductsCard />
//               <ProductsCard />
//               <ProductsCard />
//               <ProductsCard />
//               <ProductsCard /> */}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default List;

// ---------------------------------    3 use-effect takes one function and an terminating point like
// useEffect(() => {
//   setLoading(true);
//   getProducts()
//     .then((response) => {
//       setProductList(response.data);
//       setLoading(false);
//     })
//     .catch();
// },[]);

// first useeffect takes one function then after that after },[]);   the empty bracket the empty array
// represents it will load only once , it means use-effect -- use-effect loads the code inside it but how much time is defined in its second argument

// // the second parameter also known as dependency
// also we can put like loading in this case in second argument
// .catch();
// // },(loading));

// so the code inside this use-effect will run as loading state changes like loading changes from true to false so each time loading value changes the function inside use-effect will change
