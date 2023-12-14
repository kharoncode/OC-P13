import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getToken } from '../router/selectors';

function PrivateRoute({ children }) {
   const token = useSelector(getToken);
   if (!token) {
      return <Navigate to="/login" />;
   } else {
      return children;
   }
}

export default PrivateRoute;
