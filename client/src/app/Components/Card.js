"use client";
import React, { useEffect, useState } from "react";
import { IoCart } from "react-icons/io5";
import { useCart, useDispatch } from "./CardContext";
const Card = (props) => {
  const dispatch = useDispatch();
  const data = useCart();


  
  useEffect(() => {
    console.log(data)
  }, [data])

  const foodItem = props.foodItems;

  const options = props.options;
  const priceOptions = Object.keys(props.options);
  const prices = Object.values(props.options);

  const [quantity, setQuantity] = useState(1);

  const [size, setSize] = useState(priceOptions[0]);

  const finalPrice = quantity * parseInt(options[size]);

  const handleAddToCart = async () => {
    await dispatch({
      type: "ADD",
      id: foodItem._id,
      name: foodItem.name,
      price: finalPrice,
      quantity: quantity,
      size: size,
    });
    console.log(data);
  };

  return (
    <div>
      <div className="max-w-sm bg-white border mt-5 ml-7 mb-7 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-[15rem] h-[20rem] ">
        <a href="#">
          <img
            className="rounded-t-lg h-[10rem] w-[15rem]"
            src={foodItem.img}
            alt=""
          />
        </a>
        <div className="p-5 h-[10rem] w-auto">
          <a href="#">
            <div className="mb-2 text-[1.6vw] font-bold tracking-tight text-gray-900 dark:text-white">
              {foodItem.name}
            </div>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {/* {props.description} */}
            {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium modi architecto soluta maxime rem nisi iste tenetur sunt earum esse? */}
          </p>
          <div className="flex mt-5">
            <button
              onClick={handleAddToCart}
              className="inline-flex w-[20rem] h-[2rem] items-center pl-3 py-2 text-[11px] font-medium text-center text-white bg-[#dd610f] rounded-lg hover:bg-[#b14e0c] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <IoCart className="text-[1rem]" />
            </button>

            <label
              for="quantity"
              class="block mb-2 text-sm font-medium w-[90%] text-gray-900 dark:text-white"
            ></label>
            <select
              onChange={(e) => setQuantity(e.target.value)}
              id="quantity"
              class="bg-gray-50 border h-[2rem] w-[15rem] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {Array.from(Array(4), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>

            <select
              onChange={(e) => setSize(e.target.value)}
              id="countries"
              class="bg-gray-50 border h-[2rem] w-[15rem] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {priceOptions.map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mt-3">Total: {finalPrice}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
