import { TOGGLE_MOBILE_MENU } from "../actions/types";

const initialState = {
  visible: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MOBILE_MENU:
      return {
        ...state,
        visible: !state.visible,
      };
    default:
      return state;
  }
}
