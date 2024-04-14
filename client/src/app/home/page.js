"use client";

import React from "react";
import { useState, useEffect } from "react";
import Carousel from "../Components/Carousel";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";

const home = () => {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch(
      "https://food-delivery-api-ivory.vercel.app/api/foodData",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    response = await response.json();
    console.log(response[0], response[1]);
    const options = response[0][0].options[0];
    const price = Object.values(options);
    console.log(price[0]);

    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  const onInputChange = (state) => {
    setSearch(state);
  };
  return (
    <div>
      <div className="overflow-x-hidden">
        <Navbar />
        <div>
          <Carousel onInputChange={onInputChange} />
        </div>

        <div>
          {foodCat !== [] ? (
            foodCat.map((data) => {
              return (
                <div className="">
                  <div
                    className="text-4xl p-4 px-7 font-semibold sm:mt-[10vh] md:mt-[20vh] "
                    key={data.id}
                  >
                    {data.CategoryName}
                  </div>

                  <hr />
                  <div className="flex flex-wrap">
                    {foodItem
                      .filter(
                        (item) =>
                          item.CategoryName === data.CategoryName &&
                          item.name
                            .toLowerCase()
                            .includes(search.toLocaleLowerCase())
                      )
                      .map((filteredItems) => {
                        return (
                          <div className="flex" key={filteredItems._id}>
                            <Card
                              foodItems={filteredItems}
                              options={filteredItems.options[0]}
                            />
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            })
          ) : (
            <div>No such data found</div>
          )}
        </div>

        <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
      </div>
    </div>
  );
};

export default home;
