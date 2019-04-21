import { SET_CURRENT_USER, UPDATE_CART } from "./types";

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const logoutUser = () => ({
  type: SET_CURRENT_USER,
  payload: {},
});

export const updateCart = cart => {
  return {
    type: UPDATE_CART,
    payload: cart,
  };
};
