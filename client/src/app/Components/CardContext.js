import React, { createContext, useContext, useEffect, useReducer, useState } from "react";

const CardStateContext = createContext();
const CardDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          quantity: action.quantity,
          price: action.price,
            image: action.image,
          size: action.size
        },
      ];
      case "REMOVE":
          let newArr = [...state];
          newArr.splice(action.id, 1)
          console.log(newArr)
          
          return newArr;
      
      case "DROP":
          let empArr = []
          return empArr
          
    default:
      console.log("error in reducer");
  }
};

const initialState = [];



export const CartProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, initialState, ()=>{
    if (typeof window !== 'undefined') {
      const localData = localStorage.getItem('cart');
      return localData ? JSON.parse(localData) : initialState;
    }
    return initialState; 
  });
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(state));
    }
  }, [state])
  

  return (
    <CardDispatchContext.Provider value={dispatch}>
      <CardStateContext.Provider value={state}>
        {children}
      </CardStateContext.Provider>
    </CardDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CardStateContext);
export const useDispatch = () => useContext(CardDispatchContext);
