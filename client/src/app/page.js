"use client"
import { useState, useEffect} from "react";
import Card from "./Components/Card";
import Carousel from "./Components/Carousel";
import Navbar from "./Components/Navbar";


export default function Home() {
  const [search, setSearch] = useState('')
  const [foodCat, setFoodCat] = useState([])
  const [foodItem, setFoodItem] = useState([])

  const loadData = async () => {
    let response = await fetch('http://localhost:4000/api/foodData', {
      method: "POST",
      headers: {
        'Content-Type' : 'application/json'
      }
    })

    response = await response.json();
    console.log(response[0], response[1])

    setFoodItem(response[0])
    setFoodCat(response[1])

  }

  useEffect(() => {
    loadData()
  }, [])
  
  const onInputChange = (state) => {
   setSearch(state)
  }
  // console.log(search)

  return (

    <div className="overflow-x-hidden">
      <Navbar  />
    <div>
        <Carousel onInputChange={onInputChange } />
    </div>
      
      <div>
        {
          foodCat !==[] ? foodCat.map((data)=>{
            return (
            <div className="">
                <div className="text-4xl p-4 px-7 font-semibold sm:mt-[10vh] md:mt-[20vh] " key={data.id}>{data.CategoryName}</div>
                
                <hr />
                <div className="flex flex-wrap">

                  {
                    
                  foodItem.filter((item) => (item.CategoryName === data.CategoryName)&&(item.name.toLowerCase().includes(search.toLocaleLowerCase())) )
                    .map((filteredItems) => {
                      return (
                        <div className="flex" key={filteredItems._id}>
                          
                          <Card itemName={filteredItems.name}
                            image={filteredItems.img}
                            options={filteredItems.options[0]}
                            description={filteredItems.description}
                          />
                          
                      </div>
                    )
                  })
              }
                </div>
                
            </div>

          )
          
            }) 
        : <div>No such data found</div>
         
        }
        
      </div>
      
      <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
    </div>
  );
}
