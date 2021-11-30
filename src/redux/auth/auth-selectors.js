export const getUser = state => state.auth.user;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const isLoading = state => state.auth.isLoading;
export const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;
export const getUserName = state => state.auth.user.name;
export const getError = state => state.auth.error;
