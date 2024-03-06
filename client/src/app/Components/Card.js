import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="max-w-sm bg-white border mt-5 ml-7 mb-7 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-[15rem] h-[20rem] ">
        <a href="#">
          <img
            className="rounded-t-lg h-[10rem] w-[15rem]"
            src={props.image}
            alt=""
          />
        </a>
        <div className="p-5 h-[10rem] w-auto">
          <a href="#">
            <div className="mb-2 text-[1.6vw] font-bold tracking-tight text-gray-900 dark:text-white">
              {props.itemName}
            </div>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {/* {props.description} */}
            {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium modi architecto soluta maxime rem nisi iste tenetur sunt earum esse? */}
          </p>
          <div className="flex mt-5">
            <a
              href="#"
              className="inline-flex w-[20rem] h-[2rem] items-center px-2 py-2 text-[11px] font-medium text-center text-white bg-[#dd610f] rounded-lg hover:bg-[#b14e0c] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a>

            <label
              for="quantity"
              class="block mb-2 text-sm font-medium w-[90%] text-gray-900 dark:text-white"
            ></label>
            <select
              id="countries"
              class="bg-gray-50 border h-[2rem] w-[15rem] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Qty</option>
              <option value="US">1</option>
              <option value="CA">2</option>
              <option value="FR">3</option>
              <option value="DE">4</option>
            </select>
          </div>
          <div className="mt-3">Total: Rs.0</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
