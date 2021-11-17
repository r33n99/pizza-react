export const SET_SORT_BY = "SET_SORT_BY"
export const SET_CATEGORY = "SET_CATEGORY"

const initialState = {
  category: null,
  sortBy: {
    type: "rating",
    order: "desc"
  },
};

export const filtres = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_BY:
      return { ...state, sortBy: action.payload };
      case SET_CATEGORY:
        return { ...state, category: action.payload };
    default:
      return state;
  }
};
