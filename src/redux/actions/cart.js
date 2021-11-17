import { CLEAR_CART, ON_MINUS_ITEM, ON_PLUS_ITEM, REMOVE_ITEM, SET_CART_ITEMS } from "../reducers/cart";

export const addPizzaToCart = (obj) => ({
  type: SET_CART_ITEMS,
  payload: obj,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const onRemoveItem = (id) => ({
  type: REMOVE_ITEM,
  payload: id,
});

export const onMinusItem = (id) => ({
  type: ON_MINUS_ITEM,
  payload: id,
});

export const onPlusItem = (id) => ({
  type: ON_PLUS_ITEM,
  payload: id,
});


