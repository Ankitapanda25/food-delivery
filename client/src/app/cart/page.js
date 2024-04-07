"use client";
import { useEffect, useState } from "react";
import { useCart, useDispatch } from "../Components/CardContext";
import Navbar from "../Components/Navbar";

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
  

  // const updateSize = (id, newSize) => {
  //   setCartItems((prevItems) =>
  //   prevItems.map((item) =>
  //   item.id === id ? { ...item, size: newSize } : item
  //   )
  //   );
  // };
  
 
  const calculateSubtotal = (item) => {
    return item.quantity * item.price;
  };
  

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + calculateSubtotal(item),
      0
      );
    };
    
    const resetCart = () => {
      alert("");
      // dispatch({ type: "CHECKOUT" })
      data.length == 0;
      setCartItems([]);
      
      // localStorage.removeItem('cartData')
    };
    
    useEffect(() => {
      console.log("data is: ", data);
      setCartItems(data)
    }, [data]);
    
    
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
                  Quantity:{item.quantity}
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                  />
                </div>
                <div>
                  Size:{item.size}
                  {/* <select
                    value={item.size}
                    onChange={(e) => updateSize(item.id, e.target.value)}
                  >
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select> */}
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
        </div>
            {data.length > 0 ? 
          <div className="flex items-center justify-between">
              
          <button
            className="bg-[#dd610f] hover:bg-[#b14e0c] text-white px-4 py-2 rounded-lg"
            onClick={resetCart}
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
