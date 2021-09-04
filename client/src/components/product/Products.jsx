import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ProductCard from "./ProductCard";
import "./Products.css";
import data from "./data";
import Pagination from "../pagination/Pagoination";
import Tech from "../tech/Tech";
const Products = () => {
  const [items, setItems] = useState(data);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const filterItem = (categItem) => {
    const updateItem = data.filter((currElem) => {
      return currElem.category === categItem;
    });

    setItems(updateItem);
  };

  //pagination

  const [showPerPage, setshowPerPage] = useState(3);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    console.log(start, end);
    setPagination({ start: start, end: end });
  };

  return (
    <div id="products ">
      <div data-aos="fade-up" className="text-center mt-10 md:mt-30 lg:mt-30">
        <h1 className="sm:text-3xl text-4xl font-medium text-center title-font text-gray-900 mb-4">
          OUR PRODUCTS
        </h1>
        <hr className="w-52 mx-auto mt-5 headline"></hr>
      </div>

      <div
        className="sm:flex justify-center space-x-4 mt-10 sm:text-xl md:space-y-0 space-y-6 md:ml-0 ml-5 "
        data-aos="fade-up"
      >
        <button
          className="btn text-red-500 hover:bg-red-500  transition duration-500 ease-in-out transform  border-red-500 rounded-lg radius-lg items-centew-full focus:shadow-outline focus:outline-none focus:ring-1 ring-offset-current ring-offset-2"
          onClick={() => setItems(data)}
        >
          <span>ALL</span>
        </button>
        <button
          className="btn text-red-500 hover:bg-red-500  transition duration-500 ease-in-out transform  border-red-500 rounded-md items-centerw-full focus:shadow-outline focus:outline-none focus:ring-1 ring-offset-current ring-offset-2"
          onClick={() => filterItem("software")}
        >
          {" "}
          SOFTWARE
        </button>
        <button
          className="btn text-red-500 hover:bg-red-500  transition duration-500 ease-in-out transform border-red-500 rounded-md items-centerw-full focus:shadow-outline focus:outline-none focus:ring-1 ring-offset-current ring-offset-2"
          onClick={() => filterItem("website")}
        >
          <span>WEBSITE</span>
        </button>
        <button
          className="btn  text-red-500 hover:bg-red-500  transition duration-500 ease-in-out transform  border-red-500 rounded-md items-centerw-full focus:shadow-outline focus:outline-none focus:ring-1 ring-offset-current ring-offset-2"
          onClick={() => filterItem("apps")}
        >
          APPS
        </button>
        <button
          className="btn text-red-500 hover:bg-red-500  transition duration-500 ease-in-out transform border-red-500 rounded-md items-centerw-full focus:shadow-outline focus:outline-none focus:ring-1 ring-offset-current ring-offset-2  "
          onClick={() => filterItem("ecommerce")}
        >
          ECOMMERCE
        </button>
      </div>

      <div className=" bg-gradient-to-br from-gray-700 via-gray-900 to-black ">
        <div
          className=" -space-y-48 xs:-space-y-36  md:space-y-0 lg:-space-y-0 
grid md:grid-cols-3 conatain lg:grid-cols-3 xl:grid-cols-3 grid-cols-1 align-items-center  mt-10"
        >
          {items.slice(pagination.start, pagination.end).map((val) => {
            return (
              <ProductCard
                plink={val.plink}
                name={val.name}
                price={val.price}
                image={val.image}
                description={val.description}
                key={val.id}
              ></ProductCard>
            );
          })}
        </div>
      </div>
      <Pagination
        showPerPage={showPerPage}
        onPaginationChange={onPaginationChange}
        total={items.length}
      ></Pagination>
    </div>
  );
};

export default Products;
