"use client";
import { useEffect, useState } from "react";
import { useCart, useDispatch } from "../Components/CardContext";
import Navbar from "../Components/Navbar";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_51OxZH6SGsAgxdsk9e8Alop1AtJ8MvDIe7gaJwUFqdJmb02g0zs6pbpoRNJlfWvLKtVXmAoDJqB9K2Jgu8zfsvdUX00u21ytfFp");


const Cart = () => {
  let dispatch = useDispatch();
  const data = useCart();
 

  
  const [cartItems, setCartItems] = useState(data);
  

  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
    prevItems.map((item) =>
    item.id === id ? { ...item, quantity: newQuantity } : item
    )
    );
  };
  
  const calculateSubtotal = (item) => {
    return item.quantity * item.price;
  };
  

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + calculateSubtotal(item),
      0
      );
    };
    
  useEffect(() => {
    
      console.log("data is: ", data);
      setCartItems(data)

    }, [data]);
  
  
  const handleCheckOut = async () => {
    
    let userEmail = localStorage.getItem('userEmail')
    let response = await fetch("http://localhost:4000/api/orderData", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
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

  const handleClick = async () => {

    const stripe = await stripePromise;
    let userEmail = localStorage.getItem('userEmail');

    let response = await fetch("http://localhost:4000/api/create-checkout-session", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_data: data, 
        email: userEmail,
      })
    });
  
    const session = await response.json();
  
    if (response.ok) {
      const result = await stripe.redirectToCheckout({
        sessionId: session.id
      });
      
      
  
      if (result.error) {
        alert(result.error.message);
      }
    } else {
      console.error("Network response was not ok.");
    }
  };
  

    return (
      <div className="">
      <Navbar />
      <div className="px-[10rem]">
        <h1 className="text-2xl font-bold py-[5rem]">Cart Items</h1>
        <div className="">
          {cartItems.map((item, index) => (
            <div
              key={item.id} index = {index}
              className="flex items-center justify-between mb-4"
            >
              <div>
                <p className="text-lg font-semibold">{item.name}</p>
                <div>
                  Quantity:
                  <input className="ml-2 w-[5rem]"
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                  />
                <div>
                  Size: {item.size}
                 
                </div>
                </div>
              </div>
              <div> 
                <button className="bg-[#dd610f] hover:bg-[#b14e0c] text-white px-4 py-2 rounded-lg" onClick={async () => { await dispatch({ type: "REMOVE", index: index })}}>Remove</button>
                <p className="text-lg font-semibold">
                  Rs.{calculateSubtotal(item)}
                </p>
              </div>
            </div>
            
          ))}
            <hr className="mb-2"/>
        </div>
            {data.length > 0 ? 
          <div className="flex items-center justify-between">
              
            {/* <hr className="text-black"/> */}
          <button
            className="bg-[#dd610f] hover:bg-[#b14e0c] text-white px-4 py-3 rounded-lg"
                onClick={() => {handleClick(); handleCheckOut();}}
                
              >
            Checkout
          </button> 
            <p className="text-lg font-semibold">Total: Rs.{calculateTotal()}</p>
        </div>
            : <h1>No items in the cart</h1>
            }
      </div>
    </div>
  );
};


export default Cart;