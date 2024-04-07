
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel = (props) => {

  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    'https://source.unsplash.com/grilled-meat-with-sliced-lemon-and-sliced-tomatoes-on-white-ceramic-plate-mix6yDC_hxU',
    'https://source.unsplash.com/hamburger-with-vegetables-and-meat-beside-french-fries-J9lD6FS6_cs',
    'https://source.unsplash.com/white-ceramic-bowl-with-green-leaf-2hpTXgfy6pg',
    'https://source.unsplash.com/fried-food-on-white-ceramic-plate-VpOpy6QrDrs',
    // 'https://source.unsplash.com/cooked-meat-on-pan-POFG828-GQc'
    // Add more image URLs as needed
  ];

  return (
    // <div className='relative flex justify-center'>
    <div className="relative w-full h-[90vh] sm:h-full">
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="w-full md:h-[90vh] sm:h-full">
            <img src={image} alt={`slide-${index}`} className=" w-full object-center" />
          </div>
        ))}
        
      </Slider>
      <div className='w-full flex justify-center md:mt-[-20vh] sm:mt-[-10vh]'>

      <form className="absolute z-[50] w-[80%] bg-transparent ">
            <label
              type='search'
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              
            >
              Search
            </label>
            <div className="relative bg-transparent">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none bg-transparent">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns=""
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-none focus:border-none dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white  bg-[#00000059]"
                placeholder="Search for food items.."
                required
                
              onChange={(e)=> props.onInputChange(e.target.value)}

              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-[#dd610f] hover:bg-[#b14e0c] focus:ring-none focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 "
              >
                Search
              </button>
            </div>
      </form>
      </div>
      

      <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between px-4 w-full">
        <button className="text-white bg-none p-2 rounded-full" onClick={() => sliderRef.current.slickPrev()}>
          <FaChevronLeft />
        </button>
        <button className="text-white bg-none p-2 rounded-full" onClick={() => sliderRef.current.slickNext()}>
          <FaChevronRight />
        </button>
      </div>
      </div>
      // </div>
  );
};

export default Carousel;

