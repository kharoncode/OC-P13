import { useStore } from 'react-redux';
import { Route, redirect } from 'react-router-dom';

function PrivateRoute({ children, ...rest }) {
   const store = useStore();
   const token = store.getState().login.token;
   return <Route {...rest}>{!token ? redirect('/login') : children}</Route>;
}

export default PrivateRoute;
