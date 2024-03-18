import React, { createContext, useContext, useReducer } from "react";

const cartContext = createContext();
const localStorageKey = "cartList";

const cartReducer = (cart, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const cartItemAdded = [...cart, action.payload];
      localStorage.setItem(localStorageKey, JSON.stringify(cartItemAdded));
      return cartItemAdded;
    }
    case "INCREASE_QTY": {
      const increasedQty = cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      localStorage.setItem(localStorageKey, JSON.stringify(increasedQty));
      return increasedQty;
    }
    case "DECREASE_QTY": {
      const decreasedQty = cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      localStorage.setItem(localStorageKey, JSON.stringify(decreasedQty));
      return decreasedQty;
    }
    case "REMOVE_CARTITEM": {
      const removeCartItem = cart.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem(localStorageKey, JSON.stringify(removeCartItem));
      return removeCartItem;
    }
  }
  return cart;
};

function CartProvider({ children }) {
  const localStorageItem = JSON.parse(localStorage.getItem("cartList")) || [];
  const [cart, dispatch] = useReducer(cartReducer, localStorageItem);

  console.log(cart);

  const addToCart = (newCartItem) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: newCartItem,
    });
  };

  const increaseQty = (id) => {
    dispatch({
      type: "INCREASE_QTY",
      payload: { id: id },
    });
  };

  const decreaseQty = (id) => {
    dispatch({
      type: "DECREASE_QTY",
      payload: { id: id },
    });
  };

  const removeCartItem = (id) => {
    dispatch({
      type: "REMOVE_CARTITEM",
      payload: { id: id },
    });
  };

  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeCartItem,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
export function useCart() {
  return useContext(cartContext);
}
export default CartProvider;
