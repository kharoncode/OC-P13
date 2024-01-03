import { useSelector } from 'react-redux';

export function getLogin(state) {
   return state?.login;
}
export function getloginLocal(state) {
   return state?.loginLocal;
}

export function getToken(state) {
   return getLogin(state).token;
}

export function getTokenLocal(state) {
   return getloginLocal(state).token;
}

export function getProfile(state) {
   return state?.profile;
}

export function getUser(state) {
   return getProfile(state)?.profile.body;
}

export const returnToken = () => {
   const token = useSelector(getToken)
      ? useSelector(getToken)
      : useSelector(getTokenLocal);
   return token;
};
