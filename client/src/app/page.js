"use client"
import { useState, useEffect} from "react";
import Card from "./Components/Card";
import Carousel from "./Components/Carousel";
import Navbar from "./Components/Navbar";


export default function Home() {
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
  },[])

  return (

    <div>
      <Navbar />
      <div><Carousel /></div>
      <div>
        {/* {
          foodCat !==[] ? foodCat.map(data)=>{
          return(
        <div>Hello</div>
          )
            }) : <div>"""""""""</div>
         
        } */}
        <Card />
      </div>
      
      <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
    </div>
  );
}
