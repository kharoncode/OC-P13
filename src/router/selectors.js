export function getLogin(state) {
   return state?.login;
}

export function getToken(state) {
   return getLogin(state).token;
}

export function getProfile(state) {
   return state?.profile;
}

export function getUser(state) {
   return getProfile(state)?.body;
}
