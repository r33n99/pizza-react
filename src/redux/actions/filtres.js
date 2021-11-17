import { SET_CATEGORY, SET_SORT_BY } from "../reducers/filtres";

export const setSortBy = ({type,order}) => ({
  type: SET_SORT_BY,
  payload: {type,order}
});

export const setCategory = (payload) => ({
  type: SET_CATEGORY,
  payload: payload,
});
