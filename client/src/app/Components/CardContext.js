// // CartContext.js
// "use client"
// import React, { createContext, useContext, useReducer } from 'react';

// // Define context
// const CartContext = createContext();

// // Define initial state
// const initialState = {
//   items: [],
// };

// // Define actions
// const actionTypes = {
//   ADD_TO_CART: 'ADD_TO_CART',
// };

// // Define reducer function
// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case actionTypes.ADD_TO_CART:
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };
//     default:
//       return state;
//   }
// };

// // Define custom hook to use CartContext
// export const useCart = () => {
//   return useContext(CartContext);
// };

// // Define CartProvider component
// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, initialState);

//   const addToCart = (item) => {
//     dispatch({ type: actionTypes.ADD_TO_CART, payload: item });
//   };

//   return (
//     <CartContext.Provider value={{ state, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

import React, { createContext, useContext, useEffect, useReducer } from "react";

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
  const [state, dispatch] = useReducer(reducer, initialState, ()=>{;

  const localData = localStorage.getItem('cart');
  return localData ? JSON.parse(localData) : initialState;
});

  useEffect(() => {
    // Save cart state to local storage whenever it changes
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);
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
