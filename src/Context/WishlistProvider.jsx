import React, { createContext, useContext, useReducer } from "react";

const wishListContext = createContext();

const localStorageKey = "wishList";

function wishlistReducer(wishlist, action) {
  switch (action.type) {
    case "ADD_TO_WISHLIST": {
      const updatedWishlistAdd = [...wishlist, action.payload];
      localStorage.setItem(localStorageKey, JSON.stringify(updatedWishlistAdd));
      return updatedWishlistAdd;
    }
    case "REMOVE_WISHLIST_ITEM": {
      const updatedWishlistRemove = wishlist.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem(
        localStorageKey,
        JSON.stringify(updatedWishlistRemove)
      );
      return updatedWishlistRemove;
    }
  }
  return wishlist;
}

function WishlistProvider({ children }) {
  const localStorageItem = JSON.parse(localStorage.getItem("wishList")) || [];
  const [wishList, dispatch] = useReducer(wishlistReducer, localStorageItem);

  const addItemToWishList = (newWishListItem) => {
    dispatch({
      type: "ADD_TO_WISHLIST",
      payload: newWishListItem,
    });
  };

  const removeWishListItem = (id) => {
    dispatch({
      type: "REMOVE_WISHLIST_ITEM",
      payload: { id: id },
    });
  };

  return (
    <wishListContext.Provider
      value={{
        wishList,
        addItemToWishList,
        removeWishListItem,
        localStorageItem,
      }}
    >
      {children}
    </wishListContext.Provider>
  );
}

export function useWishList() {
  return useContext(wishListContext);
}

export default WishlistProvider;
