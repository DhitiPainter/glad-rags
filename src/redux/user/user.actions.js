import { userActionConstants } from "../constants";

export const setCurrentUser = (user) => ({
  type: userActionConstants.setCurrentUser,
  payload: user,
});
