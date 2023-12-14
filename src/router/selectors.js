export function getLogin(state) {
   return state?.login;
}

export function getToken(state) {
   return getLogin(state).token;
}

export function getProfile(state) {
   return state?.profile;
}

export function getIsAuthenticated(state) {
   return getProfile(state)?.isAuthenticated;
}

export function getUser(state) {
   return getProfile(state)?.profile.body;
}
