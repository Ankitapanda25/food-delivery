import React from "react";

const Card = () => {
  return (
    <div>
      <div className="max-w-sm bg-white border mt-5 ml-7 mb-7 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-[15rem] h-[20rem] ">
        <a href="#">
          <img
            className="rounded-t-lg h-[10rem] w-[15rem]"
            src="https://source.unsplash.com/a-basket-of-french-fries-sitting-on-top-of-a-wooden-table-ChXHveqrb28"
            alt=""
          />
        </a>
        <div className="p-5 h-[10rem] w-auto">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              French Fries
            </h5>
          </a>
          {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium modi architecto soluta maxime rem nisi iste tenetur sunt earum esse?
          </p> */}
          <div className="flex mt-5">
            <a
              href="#"
              className="inline-flex w-[20rem] items-center px-3 py-2 text-[11px] font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
              {/* <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg> */}
            </a>

            <label
              for="quantity"
              class="block mb-2 text-sm font-medium w-[90%] text-gray-900 dark:text-white"
            ></label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Qty</option>
              <option value="US">1</option>
              <option value="CA">2</option>
              <option value="FR">3</option>
              <option value="DE">4</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
