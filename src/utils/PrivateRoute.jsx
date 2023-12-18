import { Navigate } from 'react-router-dom';
import { returnToken } from '@router/selectors';

function PrivateRoute({ children }) {
   const token = returnToken();
   if (!token) {
      return <Navigate to="/login" />;
   } else {
      return children;
   }
}

export default PrivateRoute;
