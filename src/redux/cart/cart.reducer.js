import { cartActionTypes } from "../constants";

const initialState = {
  hidden: true,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.toggleDropdown:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
