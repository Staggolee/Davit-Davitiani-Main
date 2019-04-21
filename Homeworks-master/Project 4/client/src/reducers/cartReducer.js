import { TOGGLE_CART } from "../actions/types";

const initialState = {
  visible: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        visible: !state.visible,
      };
    default:
      return state;
  }
}
