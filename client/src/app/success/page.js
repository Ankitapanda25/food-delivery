"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useCart, useDispatch } from '../Components/CardContext'

const page = () => {
    const dispatch = useDispatch();
  const data = useCart();
    const router = useRouter()

    const handleCheckOut = async () => {
    
        let userEmail = localStorage.getItem('userEmail')
        let response = await fetch("https://food-delivery-gray-ten.vercel.app/api/orderData", {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            order_data: data,
            email: userEmail,
              order_date: new Date().toDateString(),
            order_time: new Date().toLocaleTimeString()
          })
        }
      );
      // console.log('Order response:', response)
      if (response.status === 200) {
        
        // const result = (await stripe).redirectToCheckout
      }
      else{
        console.log(error)
        
      }
      
      }
    useEffect(() => {
        setTimeout(() => {
            router.push('/home')
        }, 2000);
        dispatch({ type: "DROP" })
        handleCheckOut();
        
    },[])
  return (
    <div>
          Success
          
    </div>
  )
}

export default page
