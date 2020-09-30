import { userActionTypes } from "../constants";

export const setCurrentUser = (user) => ({
  type: userActionTypes.setCurrentUser,
  payload: user,
});
