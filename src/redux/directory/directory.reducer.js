import SECTIONS from "./../../data/sections.data";

const initialState = {
  sections: SECTIONS,
};

const directoryReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
