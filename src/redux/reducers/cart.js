export const SET_CART_ITEMS = "SET_CART_ITEMS";
export const CLEAR_CART = "CLEAR_CART";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const ON_PLUS_ITEM = "ON_PLUS_ITEM";
export const ON_MINUS_ITEM = "ON_MINUS_ITEM";


const initialState = {
  items: {},
  totalPrice: 0,
  totalCartItems: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split('.');
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CART_ITEMS': {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };

      const totalCartItems = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        items: newItems,
        totalCartItems,
        totalPrice,
      };
    }

    case 'REMOVE_ITEM': {
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currenttotalCartItems = newItems[action.payload].items.length;
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCartItems: state.totalCartItems - currenttotalCartItems,
      };
    }

    case 'ON_PLUS_ITEM': {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const totalCartItems = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        items: newItems,
        totalCartItems,
        totalPrice,
      };
    }

    case 'ON_MINUS_ITEM': {
      const oldItems = state.items[action.payload].items;
      const newObjItems =
        oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const totalCartItems = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        items: newItems,
        totalCartItems,
        totalPrice,
      };
    }

    case 'CLEAR_CART':
      return { totalPrice: 0, totalCartItems: 0, items: {} };

    default:
      return state;
  }
};

export default cart;