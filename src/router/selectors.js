import { useSelector } from 'react-redux';

export function getLogin(state) {
   return state?.login;
}
export function getLoginSession(state) {
   return state?.loginSession;
}

export function getToken(state) {
   return getLogin(state).token;
}

export function getTokenSession(state) {
   return getLoginSession(state).token;
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

export const returnToken = () => {
   const token = useSelector(getToken)
      ? useSelector(getToken)
      : useSelector(getTokenSession);
   return token;
};
