import React, { useState, useEffect } from "react";
import "./Pagination.css";
const Pagoination = ({ showPerPage, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);

  const [numberOfButtons, setNumberOfButoons] = useState(
    Math.ceil(total / showPerPage)
  );
  useEffect(() => {
    console.log("Counter Changed");

    const value = showPerPage * counter; //3*1=3
    console.log("start value:", value - showPerPage);
    console.log("End value:", value);
    onPaginationChange(value - showPerPage, value);
  }, [counter]);

  const onButtonClick = (type) => {
    if (type === "prevPage") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "nextPage") {
      if (Math.ceil(total / showPerPage) === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  const next = () => {
    onButtonClick("nextPage");
  };

  const prev = () => {
    onButtonClick("prevPage");
  };
  return (
    <div>
      <div className=" flex space-x-5 justify-center -mt-20 mb-10 ">
        <button
          className=" btn  hover:bg-red-500  transition duration-500 ease-in-out transform  border-red-500 rounded-md items-centerw-full focus:shadow-outline focus:outline-none focus:ring-1 ring-offset-current ring-offset-2"
          onClick={prev}
        >
          Previous
        </button>

        <button
          className=" btn  hover:bg-red-500  transition duration-500 ease-in-out transform  border-red-500 rounded-md items-centerw-full focus:shadow-outline focus:outline-none focus:ring-1 ring-offset-current ring-offset-2"
          onClick={next}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagoination;
