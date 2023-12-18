import { Link, useNavigate } from 'react-router-dom';
import userCircle from '@assets/circle-user-solid.svg';
import { useStore } from 'react-redux';
import { returnToken } from '@router/selectors';
import { loginSlice } from '@pages/login/loginSlice';
import { loginSessionSlice } from '@pages/login/loginSessionSlice';

function SignInOut() {
   const store = useStore();
   const navigate = useNavigate();
   const isAuthenticated = returnToken();

   const logOut = () => {
      store.dispatch(loginSlice.actions.resetLogin());
      store.dispatch(loginSessionSlice.actions.resetLogin());
      navigate('/login');
   };

   return isAuthenticated ? (
      <div className="main-nav-profile">
         <div>
            <img
               className="main-nav-profile-item"
               src={userCircle}
               alt="userLogo"
            />{' '}
            <Link to={`/profile`}>Profile</Link>
         </div>
         <span>/</span>
         <p className="main-nav-profile-item" onClick={logOut}>
            LogOut
         </p>
      </div>
   ) : (
      <Link className="main-nav-item" to={`/login`}>
         <img src={userCircle} alt="userLogo" />
         Sign In
      </Link>
   );
}

export default SignInOut;
