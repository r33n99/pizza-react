import axios from "axios";
import { SET_LOADED, SET_PIZZAS } from "../reducers/pizzas";

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `/pizzas?${category !== null ? `category=${category}` : ""}&_sort=${
        sortBy.type
      }&_order=${sortBy.order}}`
    )
    .then(({ data }) => dispatch(setPizzas(data)));
};

export const setPizzas = (items) => ({
  type: SET_PIZZAS,
  payload: items,
});

export const setLoaded = (payload) => ({
  type: SET_LOADED,
  payload,
});
